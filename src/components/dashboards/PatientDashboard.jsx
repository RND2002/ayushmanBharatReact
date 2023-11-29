import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  
  retreiveListOfHospital,
} from "../../RegistrationApi/RegistrationApi";
import { useAuth } from "../security/AuthContext";
import PatientNavbar from "./PatientNavbar";
import { getAllPatientRecordForPatient } from "../../RegistrationApi/BusinessLogicApi";
import { getLoggedInUser } from "../../RegistrationApi/LoginApi";

const PatientDashboard = () => {
  const [hospitalOptions, setHospitalOptions] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [loading,setLoading]=useState('')
  const [error,setError]=useState("");

  const [patientRecords, setPatientRecords] = useState([]);


  const authContext = useAuth();

 

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await retreiveListOfHospital();
        const hospitalOptions = response.data.map((hospital) => ({
          value: hospital.hospitalId,
          label: hospital.hospitalName,
        }));
        setHospitalOptions(hospitalOptions);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    fetchHospitals();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     getLoggedInUserData()
  //     try {
        
  //       const patientRecordResponse = await getAllPatientRecordForPatient(
  //         authContext.emailAddress,
  //         authContext.token
  //       );

  //       if (patientRecordResponse.status === 200) {
  //         setPatientRecords(patientRecordResponse.data);
  //         console.log(patientRecordResponse.data);
  //       } else {
  //         console.log(
  //           "Error fetching patient records:",
  //           patientRecordResponse.statusText
  //         );
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [authContext.token]);

  var ids=null
//   const getLoggedInUserData=()=>{
//     try {
//        const response=getLoggedInUser(authContext.emailAddress,authContext.token)
//        console.log(response.data);
//        ids=response.data.id
//     } catch (error) {
//         console.log(error);
//     }
// }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedInUserResponse = await getLoggedInUser(authContext.emailAddress, authContext.token);
        console.log(loggedInUserResponse.data);
        const ids = loggedInUserResponse.data.id;
  
        const patientRecordResponse = await getAllPatientRecordForPatient(ids, authContext.token);
  
        if (patientRecordResponse.status === 200) {
          setPatientRecords(patientRecordResponse.data);
          console.log(JSON.stringify(patientRecordResponse.data, null, 2));
        } else {
          setError(`Error fetching patient records: ${patientRecordResponse.statusText}`);
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [authContext.emailAddress, authContext.token]);
 

  if (loading) {
    return <p>Loading...</p>; // or render a loading spinner
  }

  const handleHospitalChange = (selectedOption) => {
    setSelectedHospital(selectedOption);
  };




if (loading) {
  return <p>Loading...</p>; // or render a loading spinner
}

if (error) {
  return <p>Error: {error}</p>; // or render an error message
}
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // try {
    //     const response=
    // } catch (error) {

    // }
  };

  return (
    <div>
      <PatientNavbar />

      {/* <div
        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div class="flex justify-center align-middle">
          <div>
            <p class="font-bold">
              THOUGHT OF THE DAY--->>>GO TO GYM AND EAT HEALTHY
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-blue-600 border-blue-500 text-green-400 px-4 py-3 rounded relative">
        <h2 className="font-bold text-3xl">
          Hello {username.slice(0, 6)} Welcome Back!!
        </h2>
      </div> */}
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-row justify-center align-middle mt-6">
          <div className="h-10 border  rounded  w-full   md: max-w-screen-sm">
            <Select
              value={selectedHospital}
              onChange={handleHospitalChange}
              options={hospitalOptions}
              isSearchable
              placeholder="Search or select a hospital..."
            />
          </div>
          {selectedHospital && (
            <div>
              <h3>Selected Hospital: {selectedHospital.label}</h3>
              {/* Add other content related to the selected hospital */}
            </div>
          )}

          {/* <div >
        <button type='submit' class=" mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2">
          submit
        </button>
        </div> */}
        </div>
      </form>

      <div class="card text-center m-3">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

export default PatientDashboard;
