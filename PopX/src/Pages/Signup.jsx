import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "no",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      // Save to localStorage
      localStorage.setItem("signupData", JSON.stringify(formData));

      localStorage.setItem("currentUser", JSON.stringify(formData));
      setSuccessMessage("Account created successfully!");
      
       navigate("/account");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "no",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400">
      <div className=" bg-white  rounded-lg shadow-md max-w-sm">
        <div className="max-w-[60%] ml-4 mt-4">
          <h1 className="text-2xl font-bold ">Create your PopX account</h1>
          {successMessage && (
            <p className="text-green-600 font-semibold mb-4">
              {successMessage}
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col w-full mt-5 px-4"
        >
          <label className="mb-1 font-semibold text-purple-600">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder=" Enter full name"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mb-2">{errors.fullName}</p>
          )}
          <label className="mb-1 font-semibold text-purple-600">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder=" Enter phone number"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mb-2">{errors.phone}</p>
          )}
          <label className="mb-1 font-semibold text-purple-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder=" Enter email address"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-2">{errors.email}</p>
          )}

          <label className="mb-1 font-semibold text-purple-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mb-2">{errors.password}</p>
          )}
          <label className="mb-1 font-semibold text-purple-600">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            placeholder=" Enter company name"
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          {errors.company && (
            <p className="text-red-500 text-xs mb-2">{errors.company}</p>
          )}

          <p className="mb-2 font-semibold">Are you an Agency?</p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="mr-4">Yes</label>

            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            <label>No</label>
          </div>
          <button
            type="submit"
            className="bg-violet-700 text-white py-3 rounded-md text-center mb-3 w-full mt-4"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
