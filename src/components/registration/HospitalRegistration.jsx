import React, { useState } from "react";

import { sendHospitalRegistrationData } from "../../RegistrationApi/RegistrationApi";
const HospitalRegistration = () => {

  const [formData, setFormData] = useState({
    hospitalName: "",
    registrationNumber: "",
    emailAddress: "",
    password: "",
    specialization: "",
    fullAddress: "",
    city: "",
    role: "ROLE_HOSPITAL",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit =async (e) => {
    // You can perform any action with the form data here (e.g., send it to the server)
    e.preventDefault();
     try{
      const response=await sendHospitalRegistrationData(formData)
      if(response.status===200){
        console.log("done")
      }

    }catch(error){
      console.log(error);
    }
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <h2 class="font-semibold text-xl text-gray-600 mb-4">
            Hospital Registration
          </h2>
          <div>
            <form onSubmit={handleSubmit}>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6" >
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Hospital Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {/* <form onSubmit={handleSubmit}> */}
                    <div class="md:col-span-5">
                      <label for="full_name">Hospital Name</label>
                      <input
                        type="text"
                        name="hospitalName"
                        id="hospitalName"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.hospitalName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="full_name">Registration Number </label>
                      <input
                        type="text"
                        name="registrationNumber"
                        id="registrationNumber"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="full_name">Hospital's Email Address </label>
                      <input
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="full_name">Specialization</label>
                      <input
                        type="text"
                        name="specialization"
                        id="specialization"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.specialization}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* <div class="md:col-span-5">
                                            <label for="email">Email Address</label>
                                            <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                                        </div> */}

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
                        required
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="city">City</label>
                      <select
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="volvo">Varanasi</option>
                        <option value="saab">PrayagRaj</option>
                        <option value="mercedes">Lucknow</option>
                        <option value="audi">Delhi</option>
                      </select>
                      
                    </div>
                    <div class="md:col-span-5">
                      <label for="full_name">Role </label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value="ROLE_HOSPITAL"
                        onChange={handleInputChange}
                        hidden
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
                        required
                      />
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                  
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalRegistration;
