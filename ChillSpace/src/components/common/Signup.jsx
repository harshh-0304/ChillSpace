// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState(""); // State for success message

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/user", {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//       });

//       setMessage("User created successfully! ✅"); // Set success message
      

//       // Reset form fields after success
//       setFormData({ firstName: "", lastName: "", email: "", password: "" });
//     } catch (error) {
//       console.error(error);
//       setMessage("Error creating user. ❌");
//     }
//   };

//   return (
// <div className="d-flex justify-content-center align-items-center vh-100 vw-100" data-bs-theme="dark">
//   <div className="card p-4 bg-dark text-light shadow-lg" style={{ width: "500px" }}>
//         <h2 className="text-center mb-4">Signup</h2>

//         {message && (
//           <div className={`alert ${message.includes("success") ? "alert-success" : "alert-danger"}`} role="alert">
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               className="form-control"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               className="form-control"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>

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

//           <button type="submit" className="btn btn-primary w-100">Signup</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/user", formData);
      toast.success("User created successfully! ✅", { position: "top-center" });
      
      // Reset form fields after success
      setFormData({ firstName: "", lastName: "", email: "", password: "" });

    } catch (error) {
      console.error(error);
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
