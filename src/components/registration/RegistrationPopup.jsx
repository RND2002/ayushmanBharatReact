import React from "react";
import {useNavigate} from 'react-router-dom'
const RegistrationPopup = () => {
  const navigate=useNavigate()
  const goToPatientRegistrationPage=()=>{
        navigate(`/patientRegistration`)
  }

  const goToDoctorRegistrationPage=()=>{
    navigate(`/doctorRegistration`)
  }

  const goToHospitalRegistration=()=>{
    navigate(`/hospitalRegistration`)
  }
  return (
    <div >
      <center className="mt-10"> <h2 className="font-bold text-2xl">Who are you?</h2></center>
      <div className="flex justify-center mt-12 ">
       
        <button onClick={goToPatientRegistrationPage} class="btn btn-outline-primary m-2">
          Patient
        </button>
        <button onClick={goToDoctorRegistrationPage} class="btn btn-outline-primary m-2">
          Doctor
        </button>
        <button onClick={goToHospitalRegistration} class="btn btn-outline-primary m-2">
          Hospital
        </button>
      </div>
    </div>
  );
};

export default RegistrationPopup;
