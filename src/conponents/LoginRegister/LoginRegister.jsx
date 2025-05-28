import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import loginPagebg2 from "../../assets/loginPagebg2.jpg";
import { motion } from "framer-motion";

const LoginRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (location.state?.register) {
      setIsRegister(true);
    }
  }, [location.state]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({ name: "", email: "", password: "" });
    setShowPassword(false);
    setMessage(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `http://localhost:5000/api/auth/${
      isRegister ? "register" : "login"
    }`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage({ type: "error", text: data.msg || "Something went wrong" });
        return;
      }

      if (isRegister) {
        setMessage({
          type: "success",
          text: "Registration successful! You can now log in.",
        });
        toggleForm();
      } else {
        const { token, id, name, role } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify({ id, name, role }));
        setMessage({ type: "success", text: "Login successful!" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Server error. Please try again.",
        error,
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${loginPagebg2})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full p-6 transition-all duration-300 shadow-2xl sm:max-w-sm md:max-w-md lg:max-w-lg sm:p-8 bg-white/30 backdrop-blur-md rounded-2xl"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">
          {isRegister ? "Register" : "Login"}
        </h2>

        {message && (
          <div
            className={`mb-4 text-sm text-center ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div className="relative">
              <FaUser className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          )}
          <div className="relative">
            <FaEnvelope className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white transition-all duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginRegister;
