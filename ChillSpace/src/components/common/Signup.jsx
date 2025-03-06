import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      formData.roleId="67c687c800f5d5507c81b3fe"
      const response = await axios.post("http://localhost:3000/user", formData);
      console.log("Signup Response:", response.data); // ✅ Log response
      
      toast.success("User created successfully! ✅", { position: "top-center" });
      
      // Reset form fields after success
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      
      // ✅ Redirect to Login Page after signup
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Signup Error:", error.response ? error.response.data : error);
      toast.error("Error creating user. ❌", { position: "top-center" });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100" data-bs-theme="dark">
      <ToastContainer />
      <div className="card p-4 bg-dark text-light shadow-lg" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
