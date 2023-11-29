import  axios  from "axios"
export const apiClient =axios.create(
    {
        baseURL:'http://localhost:8080/'
    }
)
//http://35.244.8.106:3000



export const sendPatientMedicalRecord = (id,formData, token) => {
  const headers = {
    'Authorization': `${token}`, // Include your access token here
    'Content-Type': 'application/json',
  };

  return apiClient.post(`doctor/addPatientMedical/${id}`, formData, { headers });
};
//
//export const sendDoctorRegistrationData=(formData)=>apiClient.post(`registration/addDoctor`,formData)

export const getAllPatientRecord=(id,token)=>{
    const headers={
        'Authorization':`${token}`,
        'Content-Type':'application/json'
    };
    return apiClient.get(`doctor/getMedicalRecord/${id}`,{headers})
}



export const getAllPatientRecordForPatient=(id,token)=>{
  const headers={
      'Authorization':`${token}`,
      'Content-Type':'application/json'
  };
  return apiClient.get(`records/getMedicalRecord/${id}`,{headers})
}

export const getLoggedInDoctor=(token)=>{
  const headers={
    'Authorization':`${token}`,
        'Content-Type':'application/json'
  }
  return apiClient.get(`doctor/email`,{headers})
}


