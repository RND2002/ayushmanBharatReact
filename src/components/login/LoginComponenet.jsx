import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import { getLoggedInUser } from "../../RegistrationApi/LoginApi";
// import { getLoggedInUser, getRoleOfLoggedInUser } from "../../RegistrationApi/RegistrationApi";

const LoginComponenet = () => {
  const navigate = useNavigate();
  function goToPopupRegistrationPage() {
    navigate(`/popup`);
  }

  

    const authContext = useAuth()

  const [formData, setFormData] = useState({
    emailAddress: null,
    password: null,
  });

  const [id,setId]=useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 



  const handleSubmit =async (e) => {
    e.preventDefault();
    
    console.log(formData)
    if(await authContext.login(formData.emailAddress,formData.password)){
      // const response=getLoggedInUser()
     
      //getLoggedInUserData()

    
       if(authContext.role==='ROLE_PATIENT'){
         navigate(`/patientDashboard`)
        }
      if(authContext.role==='ROLE_DOCTOR'){
        navigate(`/doctorDashboard`)
       }if(authContext.role==='ROLE_HOSPITAL'){
        navigate(`/hospitalDashboard`)
       }
    //navigate('/patientDashboard')
    }else{
        console.log("error")
    }
  };
  return (
    <div>
      <section class="bg-gray-50 " onSubmit={handleSubmit}>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 ">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                >
                  Sign in to Continue
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                 
                </p>
              </form>
              <button
                    onClick={goToPopupRegistrationPage}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginComponenet;
