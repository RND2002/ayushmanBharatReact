// import React, { useState, useEffect } from "react";
// import PatientNavbar from "./PatientNavbar";

// const PatientDashBoard = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [cities, setCities] = useState([]);
//   const [hospitals, setHospitals] = useState([]);

//   const states = ["Uttar Pradesh", "New Delhi", "Madhya Pradesh", "Maharashtra"];

//   const handleStateChange = (event) => {
//     const newState = event.target.value;
//     setSelectedState(newState);
//     // Fetch cities based on the selected state
//     // You can replace this with your actual API call
//     fetchCities(newState);
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//     // Fetch hospitals based on the selected state and city
//     // You can replace this with your actual API call
//     fetchHospitals(selectedState, event.target.value);
//   };

//   const fetchCities = (state) => {
//     // Mocking city data based on the selected state
//     // You should replace this with your actual API call
//     switch (state) {
//       case "Uttar Pradesh":
//         setCities(["Varanasi", "PrayagRaj", "Lucknow"]);
//         break;
//       case "New Delhi":
//         setCities(["Delhi", "Noida", "Gurgaon"]);
//         break;
//       // Add cases for other states
//       default:
//         setCities([]);
//     }
//   };

//   const fetchHospitals = (state, city) => {
//     // Mocking hospital data based on the selected state and city
//     // You should replace this with your actual API call
//     // For simplicity, the hospital data is hardcoded here
//     const hospitalsData = [
//       { id: 1, name: "Hospital A" },
//       { id: 2, name: "Hospital B" },
//       { id: 3, name: "Hospital C" },
//     ];
//     setHospitals(hospitalsData);
//   };

//   return (
//     <div>
//       <PatientNavbar />
//       <h2 className="font-bold mt-12 text-4xl">
//         <center>Book Your Appointment</center>
//       </h2>

//       <form>
//         <div className="container flex items-center justify-center mt-6">
//           <div className="md:col-span-5">
//             <label htmlFor="state">Select State</label>
//             <select
//               name="state"
//               id="state"
//               className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//               value={selectedState}
//               onChange={handleStateChange}
//             >
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="container flex items-center justify-center mt-6">
//           <div className="md:col-span-5">
//             <label htmlFor="city">Select City</label>
//             <select
//               name="city"
//               id="city"
//               className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//               value={selectedCity}
//               onChange={handleCityChange}
//               disabled={!selectedState} // Disable the city dropdown until state is selected
//             >
//               <option value="">Select City</option>
//               {cities.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="container flex items-center justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={(e) => {
//               e.preventDefault();
//               // Handle the submit action if needed
//             }}
//             disabled={!selectedState || !selectedCity}
//           >
//             Search Hospitals
//           </button>
//         </div>
//       </form>

//       <div className="container mt-6">
//         <h3 className="text-2xl font-bold">Hospitals in {selectedCity}</h3>
//         <ul>
//           {hospitals.map((hospital) => (
//             <li key={hospital.id}>{hospital.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PatientDashBoard;
