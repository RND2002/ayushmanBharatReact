import  axios  from "axios"
export const apiClient =axios.create(
    {
        baseURL:'http://localhost:8080/'
    }
)

export const executeJwtAuthenticationService=(emailAddress,password)=>apiClient.post(`auth/login`,{emailAddress,password})


export const getLoggedInUser=(emailAddress,token)=>{
    const headers={
        'Authorization':`${token}`,
        'Content-Type':'application/json'
    };
    console.log(token);
    return apiClient.get(`loggedInUser/${emailAddress}`,{headers})
  }