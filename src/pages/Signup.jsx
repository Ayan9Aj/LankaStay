
import React, { useState } from "react";
import { Mail, Lock,User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="sm:w-[350px] w-full mx-auto mt-36 text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-heading text-3xl mt-10 font-medium">
          Signup
        </h1>

        <p className="text-paragraph text-sm mt-2">
          Please sign up to continue
        </p>

        {/* Name Input */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <User className="w-4 h-4" />

          <input
            type="text"
            name="name"
            placeholder="Username"
            className="border-none outline-none ring-0"
            value={formData.name}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail className="w-4 h-4" />

          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock className="w-4 h-4" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity cursor-pointer mt-3"
        >
          Signup
        </button>
        
        <p //Link tag here is used to navigate to the login page when the user clicks on the "Login Here" link. 
        className="text-gray-500 text-sm mt-3 mb-11" >
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
