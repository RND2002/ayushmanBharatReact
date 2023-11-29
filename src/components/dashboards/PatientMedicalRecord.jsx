import React, { useState } from "react";
import { sendPatientMedicalRecord } from "../../RegistrationApi/BusinessLogicApi";
import { useAuth } from "../security/AuthContext";
import {useNavigate, useParams} from "react-router-dom"
import { getLoggedInUser } from "../../RegistrationApi/RegistrationApi";
import { formToJSON } from "axios";
const PatientMedicalRecord = () => {
  const [errorVisible, setErrorVisible] = useState(false);
  const [emailDoctor,setEmailofDoctor]=useState("")

  const [formData, setFormData] = useState({
    doctorEmail:"",
    patientName: "",
    adharNumber:"",
    time: "",
    patientProblem: "",
    hospitalName: "",
    doctorName: "",
    descriptionData: "",
  });

  const authContext=useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      
      [e.target.name]: e.target.value,
    });
  };
  const navigate=useNavigate()
  const {id}=useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response=await sendPatientMedicalRecord(id,formData,authContext.token)
      
      
      if(response.status===200){
          navigate(`/doctorDashboard`)
      }
      
    

      // Display a success message or redirect the user
      console.log("Form submitted successfully!");
    } catch (error) {
      // Handle errors (display an error message or log the error)
      console.error("Error submitting form:", error.message);
    }
  };

  const toggleError = () => {
    setErrorVisible(!errorVisible);
  };

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div class="max-w-md mx-auto">
            <div class="flex items-center space-x-5">
              <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                i
              </div>
              <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 class="leading-relaxed">Patient's Medical Report</h2>
                <p class="text-sm text-gray-500 font-normal leading-relaxed">
                  This will be reference for future medications. Fill it under supervision of Doctor
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="flex flex-col">
                  <label class="leading-loose"> Doctor's Email</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Fill it carefully"
                    name="doctorEmail"
                    value={formData.doctorEmail}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Patient Name</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Patient's name"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Patient's Adhar Number</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter correct Adhar Number of Patient"
                    name="adharNumber"
                    value={formData.adharNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Current Date</label>
                  <input
                    type="Date"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Optional"
                    name="time"
                    value={formData.time}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose"> Problem of Patient</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Fill it carefully"
                    name="patientProblem"
                    value={formData.patientProblem}
                    required
                    onChange={handleChange}
                  />
                </div>
               
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col">
                    <label class="leading-loose">Hospial Name</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Mention Hospital Name"
                        name="hospitalName"
                        value={formData.hospitalName}
                        onChange={handleChange}
                        required
                      />
                    
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">Doctor name</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Mention Doctor Name"
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                        required
                      />
                      
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Write Test Results and Doctor Medications</label>
                  <input
                    type="text"
                    class="px-4 py-2 border h-16 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Necessary for further medications"
                    value={formData.descriptionData}
                    name="descriptionData"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>{" "}
                  Cancel
                </button>
                <button type="submit" class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Save Report
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientMedicalRecord;
