import React, { useEffect, useState } from 'react'
import DoctorNavbar from './DoctorNavbar'

import PatientMedicalRecordList from './PatientMedicalRecordList';
import { useAuth } from '../security/AuthContext';
const DoctorDashBoard = () => {

  // const [username, setusername] = useState("");

  const authContext=useAuth()

  // useEffect(() => {
  //   const getNameOfLoggedInUser = async () => {
  //     try {
  //       const response = await getLoggedInUser();
  //       setusername(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getNameOfLoggedInUser();
  // }, []);
  return (
    <div>
        <DoctorNavbar/>

    

<h2 className="font-bold text-xl">
          Hello {authContext.emailAddress.slice(0, 6)} Welcome Back!!
        </h2>

     
      <h2 className='font-bold text-2xl'>List of Patients</h2>
      <PatientMedicalRecordList/>

    </div>
  )
}

export default DoctorDashBoard

