import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    data.roleId = "67c687c800f5d5507c81b3fe";
    navigate("/user");
    try {
      const res = await axios.post("/user/login", data);
      console.log(res.data);
      if (res.status === 200 && res.data.success) {
        localStorage.setItem("id", res.data.data._id);
        
      } else {
        console.error("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 bg-dark text-light">
      <div className="p-4 bg-secondary rounded w-25">
        <h1 className="text-center">LOGIN USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-3">
            <label className="form-label">EMAIL</label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Enter email"
              className="form-control bg-dark text-light"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
              className="form-control bg-dark text-light"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};