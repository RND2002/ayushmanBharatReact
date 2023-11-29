import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPatientRegistrationData } from "../../RegistrationApi/RegistrationApi";

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    adharNumber: "",
    password: "",
    emailAddress: "",
    fullAddress: "",
    phoneNumber:"",
    role: "ROLE_PATIENT",
    city: "",
    zipCode: "",
  });

  

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendPatientRegistrationData(formData);
      if (response.status === 200) {
        navigate(`/login`)
        console.log("done");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <h2 class="font-semibold text-xl text-gray-600 mb-4">
              Patient Registration
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
                            id="fullName"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.fullName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Adhar Number</label>
                          <input
                            type="text"
                            name="adharNumber"
                            id="adharNumber"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.adharNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Password</label>
                          <input
                            type="text"
                            name="password"
                            id="password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* <div class="md:col-span-5">
                                <label for="full_name">Specialization</label>
                              
                                <select name="specialization" id="specialization" className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'>
                                    <option value="volvo">Heart</option>
                                    <option value="saab">Eye/Ear</option>
                                    <option value="mercedes">Surgeon</option>
                                    <option value="audi">Hair and Skin</option>
                                </select>
                            </div> */}

                        <div class="md:col-span-5">
                          <label for="email">Email Address</label>
                          <input
                            type="text"
                            name="emailAddress"
                            id="emailAddress"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            placeholder="email@domain.com"
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
                          <label for="city">Phone Number</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            id="address"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder=""
                          />
                         
                        </div>

                       

                        <div class="md:col-span-5">
                          <label for="full_name">Role</label>
                          <input
                            type="text"
                            name="role"
                            id="role"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.role}
                            hidden
                            onChange={handleInputChange}
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
                            <option value="select">Select City</option>
                            <option value="volvo">Varanasi</option>
                            <option value="saab">PrayagRaj</option>
                            <option value="mercedes">Lucknow</option>
                            <option value="audi">Delhi</option>
                          </select>
                        </div>

                        <div class="md:col-span-1">
                          <label for="zipcode">Zipcode</label>
                          <input
                            type="text"
                            name="zipCode"
                            id="zipCode"
                            class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            value={formData.zipCode}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div class="md:col-span-5 text-right">
                          <div class="inline-flex items-end">
                            <button
                              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              type="submit"
                            >
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
    </div>
  );
};

export default PatientRegistration;
