import React, { useEffect, useState } from "react";
import {
  retreiveListOfHospital,
  sendDoctorRegistrationData,
} from "../../RegistrationApi/RegistrationApi";

import Select from "react-select";
import { useNavigate } from "react-router-dom";

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    registrationNumber: "",
    specialization: "",
    hospitalEntityId: "",
    emailAddress: "",
    password: "",
    role: "ROLE_DOCTOR",
    fullAddress: "",
    city: "",
    zipCode: "",
  });
  const [hospitalOptions, setHospitalOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await retreiveListOfHospital();
        const hospitalOptions = response.data.map((hospital) => ({
          value: hospital.hospitalId, // Adjust based on your hospital object structure
          label: hospital.hospitalName,
        }));
        setHospitalOptions(hospitalOptions);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    fetchHospitals();
  }, []);

  const handleHospitalChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    const hospitalName = selectedOption ? selectedOption.value : '';
    console.log(hospitalName)
    setFormData((prevData) => ({
      ...prevData,
      hospitalEntityId: hospitalName,
    }));
    
  };
  
 
  // const handleSelectChange = (selectedOption) => {
  
  //   const hospitalName = selectedOption ? selectedOption.value : '';
  //   setFormData((prevData)=>({
  //     ...prevData,
  //     hospital:hospitalName
  //   }));
  // };


  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await sendDoctorRegistrationData(formData);

      if (response.status === 200) {
        navigate(`/login`)
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };

  return (
    <div>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <h2 class="font-semibold text-xl text-gray-600 mb-4">
            Doctor Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          id="full_name"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="md:col-span-5">
                        <label for="full_name">
                          Registration Number issued by NMC
                        </label>
                        <input
                          type="text"
                          name="registrationNumber"
                          id="registrationNumber"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.registrationNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="md:col-span-5">
                        <label for="full_name">Specialization</label>
                        {/* <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" /> */}
                        <select
                          name="specialization"
                          id="specialization"
                          value={formData.specialization}
                          onChange={handleInputChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                          <option value="volvo">Heart</option>
                          <option value="saab">Eye/Ear</option>
                          <option value="mercedes">Surgeon</option>
                          <option value="audi">Hair and Skin</option>
                        </select>
                      </div>
                      <div class="md:col-span-5">
                        <label for="full_name">Hospital Name</label>
                        {/* <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" /> */}
                        {/* <Select
                          value={selectedOption}
                          onChange={handleInputChange}
                          options={options}
                          isSearchable
                          placeholder="Search or select a hospital..."
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        /> */}
                        <Select
                        id="selectOption"
                        name="hospital"
                          value={formData.hospitalEntityId && selectedOption}
                          // onChange={(selectedOption) =>
                          //   handleInputChange("selectedOption", selectedOption)
                          // }
                          onChange={handleHospitalChange}
                          options={hospitalOptions}
                          isSearchable
                          placeholder="Search or select a hospital..."
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      {/* <div>
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={options}
                          isSearchable
                          placeholder="Search or select a hospital..."
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div> */}

                      <div class="md:col-span-5">
                        <label for="email">Email Address</label>
                        <input
                          type="email"
                          name="emailAddress"
                          id="email"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div class="md:col-span-2">
                        <label for="city">Password</label>
                        <input
                          type="text"
                          name="password"
                          id="city"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="city">Role</label>
                        <input
                          type="text"
                          name="role"
                          id="city"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <input
                          type="text"
                          name="fullAddress"
                          id="address"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.fullAddress}
                          onChange={handleInputChange}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder=""
                        />
                      </div>

                      <div class="md:col-span-1">
                        <label for="zipcode">Zipcode</label>
                        <input
                          type="text"
                          name="zipCode"
                          id="zipcode"
                          class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={formData.zipCode}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistration;
