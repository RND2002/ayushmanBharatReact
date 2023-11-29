import { createContext, useContext, useEffect, useState } from "react";
import { executeJwtAuthenticationService, getLoggedInUser } from "../../RegistrationApi/LoginApi";
import { apiClient } from "../../RegistrationApi/RegistrationApi";
import Cookies from "js-cookie";
///creating a context
export const AuthContext=createContext()
//Share the created conext with other component
export const useAuth=()=>useContext(AuthContext)
export default function AuthProvider({children}){

    const [isAuthenticated,setAuthenticated]=useState(false)
    const [emailAddress, setEmail] = useState(null)
    const [role,setRole]=useState(null)

    const [token,setToken]=useState(null)
    

    

    useEffect(() => {
        // Check if there's a token in the cookie when the component mounts
        const storedToken = Cookies.get("authToken");
        if (storedToken) {
          setAuthenticated(true);
          setToken(token);
          // You may also want to fetch user details based on the stored token
          // and update the email and role states accordingly.
        }
      }, []);

    async function login(emailAddress,password){
        try {
            const response=await executeJwtAuthenticationService(emailAddress,password)
            if(response.status===200){
              // console.log(response.status)
                const tokens='Bearer '+  response.data.jwtToken
                
//'Bearer ' +   
                //console.log(jwtToken);
                setAuthenticated(true)
                setEmail(emailAddress)
                setToken(tokens)
                 console.log(response.data.role[0].authority);
               // console.log(response.data)
                // console.log(jwtToken)
                setRole(response.data.role[0].authority)
                //console.log(role)

                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('intercepting and adding token')
                        config.headers.Authorization=tokens
                        return config
                    }
                )
                return true
            }else{
                logout()
                return false;
            }
            
        } catch (error) {
            logout()
            return false;
        }
    }

   
    function logout() {
        setAuthenticated(false)
        setToken(null)
        setEmail(null)
        setRole(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, emailAddress, token,role}  }>
            {children}
        </AuthContext.Provider>
    )
}