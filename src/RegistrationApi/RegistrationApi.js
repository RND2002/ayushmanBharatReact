import  axios  from "axios"
export const apiClient =axios.create(
    {
        baseURL:'http://localhost:8080/'
    }
)
//http://35.244.8.106:3000

export const sendDoctorRegistrationData=(formData)=>apiClient.post(`registration/addDoctor`,formData)

export const sendHospitalRegistrationData=(formData)=>apiClient.post(`registration/addHospital`,formData)
export const sendPatientRegistrationData=(formData)=>apiClient.post(`registration/addPatient`,formData)
export const retreiveListOfHospital=()=>apiClient.get(`/registration/getAllHospital`)


// export const getLoggedInUser=(token)=>{
//     const headers={
//         'Authorization':`${token}`,
//         'Content-Type':'application/json'
//     };
//     console.log(token);
//     return apiClient.get('/patient/welcome',{headers})
//   }



//   export const sendPatientMedicalRecord = (formData, token) => {
//     const headers = {
//       'Authorization': `${token}`, // Include your access token here
//       'Content-Type': 'application/json',
//     };
  
//     return apiClient.post('medicalRecord/saveMedicalRecord', formData, { headers });
//   };