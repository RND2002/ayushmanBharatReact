import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import RegistrationPopup from './components/registration/RegistrationPopup'
import LandingPage from './components/LandingPage'
import PatientRegistration from './components/registration/PatientRegistration'
import DoctorRegistration from './components/registration/DoctorRegistration'
import HospitalRegistration from './components/registration/HospitalRegistration'

import PatientDashboard from './components/dashboards/PatientDashboard'
import LoginComponenet from './components/login/LoginComponenet'
import AuthProvider, { useAuth } from './components/security/AuthContext'
import HospitalDashboard from './components/dashboards/HospitalDashboard'
import DoctorDashBoard from './components/dashboards/DoctorDashBoard'
import PatientMedicalRecord from './components/dashboards/PatientMedicalRecord'

function AuthenticatedRoute({children}) {
  const authContext = useAuth()
  
  if(authContext.isAuthenticated)
      return children

  // return <Navigate to="/" />
}
const Router = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        
        
        <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/login' Component={LoginComponenet}/>
            <Route path='/popup' Component={RegistrationPopup}/>
            <Route path='/patientRegistration' Component={PatientRegistration}/>
            <Route path='/doctorRegistration' Component={DoctorRegistration}/>
            <Route path='/hospitalRegistration' Component={HospitalRegistration}/>
            <Route path='/hospitalDashboard' Component={HospitalDashboard}/>
            <Route path='/doctorDashboard' element={<AuthenticatedRoute><DoctorDashBoard/></AuthenticatedRoute>}/>

            <Route path='/patientDashboard' element={<AuthenticatedRoute><PatientDashboard/> </AuthenticatedRoute>}/>

            <Route path='/patientMedicalData/:id' element={<AuthenticatedRoute><PatientMedicalRecord/></AuthenticatedRoute>}/>
            
        </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default Router
