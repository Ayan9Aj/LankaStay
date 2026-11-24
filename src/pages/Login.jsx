
import React, { useContext, useState } from "react";
import { Mail,Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast"
const Login = () => {
const { user, setUser, navigate } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); //useState is used to manage the state of the form data, which includes email, and password fields.

  const [state, setState] = useState("login");

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,[e.target.name]: e.target.value, //e.target.name is used to dynamically update the corresponding field in the formData state based on the input field's name attribute.
    });
  }; //onChangeHandler is a function that updates the formData state whenever an input field changes.

  const submitHandler =async(e) => {
    e.preventDefault();
    toast.success("login successful")
    setUser(true);
    navigate("/")
    console.log("Form submitted:", formData);
  }; //submitHandler is a function that handles the form submission, preventing the default behavior and logging the form data to the console.

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="sm:w-[350px] w-full mx-auto mt-36 text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-heading text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-paragraph text-sm mt-2">
          Please sign in to continue
        </p>
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name}
              onChange={onChangeHandler}
              required
            />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail className="w-4 h-4" />
          <input //email input field for the login form, with a mail icon and styling.and use onChangeHandler to update the formData state when the user types in the email field.
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock className="w-4 h-4" />
          <input //password input field for the login form, with a lock icon and styling.and use onChangeHandler to update the formData state when the user types in the password field.
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
         Login
        </button>
        <p //Link tag here is used to navigate to the signup page when the user clicks on the "Sign up" link.
          className="text-gray-500 text-sm mt-3 mb-11"
        >
            Don't have an account?{""}
          <Link to="/signup" className="text-primary">
            Sign up 
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
