


import React, { useEffect, useState } from 'react';
import { getAllPatientRecord } from '../../RegistrationApi/BusinessLogicApi';
import { useAuth } from '../security/AuthContext';
import { getLoggedInUser } from '../../RegistrationApi/LoginApi';

const PatientMedicalRecordList = () => {
  const [patientRecords, setPatientRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState();

  const authContext = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedInUserResponse = await getLoggedInUser(authContext.emailAddress, authContext.token);
        console.log(loggedInUserResponse.data);
        const ids = loggedInUserResponse.data.id;

        const patientRecordResponse = await getAllPatientRecord(ids, authContext.token);

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

  if (error) {
    return <p>Error: {error}</p>; // or render an error message
  }

  return (
    <div className='container'>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name of Patient</th>
              <th>Patient problem</th>
              <th>Doctor Name</th>
              <th>Hospital Name</th>
              <th>Action Performed</th>
            </tr>
          </thead>
          <tbody>
            {patientRecords.map(
              todo => (
                <tr key={todo.id}>
                  <td>{todo.patientName}</td>
                  <td>{todo.patientProblem}</td>
                  <td>{todo.doctorName}</td>
                  <td>{todo.hospitalName}</td>
                  <td><button className='btn btn-outline-info'>View</button></td>
                  <td><button className='btn btn-outline-danger'>Remove</button></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientMedicalRecordList;
