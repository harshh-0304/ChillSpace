// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState(""); // State for success/error message

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/user/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       setMessage("Login successful! ✅"); // Show success message
      
//       // Reset form fields after success
//       setFormData({ email: "", password: "" });

//     } catch (error) {
//       console.error(error);
//       setMessage("Invalid credentials. ❌");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 vw-100" data-bs-theme="dark">
//       <div className="card p-4 bg-dark text-light shadow-lg" style={{ width: "500px" }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {message && (
//           <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`} role="alert">
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Email address</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/user/login", formData);
      toast.success("Login successful! ✅", { position: "top-center" });

      // Reset form fields after success
      setFormData({ email: "", password: "" });

    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials. ❌", { position: "top-center" });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100" data-bs-theme="dark">
      <ToastContainer />
      <div className="card p-4 bg-dark text-light shadow-lg" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
