import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import { Footer } from "../Footer";
import axiosInstance from "../Auth";

const Login = () => {
  let navigate = useNavigate();
  const handleClick = async () => {
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BACKEND}/tokens/authentication`,
        {
          email,
          password,
        }
      );
      const { token, expiry } = response.data.authentication_token;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authTokenExpiry", expiry);
      navigate("/dashboard/doctor/");
    } catch (error) {
      console.error("Authentication failed:", error);
      setLoginError(true);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BACKEND}/tokens/authentication`,
        {
          email,
          password,
        }
      );
      const { token, expiry } = response.data.authentication_token;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authTokenExpiry", expiry);
      navigate("/Dashboard/patient");
    } catch (error) {
      console.error("Authentication failed:", error);
      setLoginError(true);
    }
  };

  return (
    <div>
      <Navigation />
      <div
        className="hero h-full bg-blue-200"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/a7/bf/8e/a7bf8e534918be24fea8fbeeb8552aa9.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full mt-16 max-w-sm shadow-2xl shadow-blue-200 bg-white-100 bg-opacity-10 backdrop-blur-lg border border-blue-400 border-b-4 border-r-4 p-4">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <div className="text-black py-6 text-3xl text-left">
                  <p>LOGIN</p>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input bg-white input-bordered input-info w-full max-w-xs"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input bg-white input-bordered input-info w-full max-w-xs"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loginError && (
                <div className="form-control mt-6 text-red-500">
                  <p>Login failed. Please check your email and password.</p>
                </div>
              )}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500"
                >
                  LOGIN AS PATIENT
                </button>
                <div className="text-black py-4 text-4xl">
                  <p> </p>
                </div>
                <button
                  onClick={handleClick}
                  type="submit"
                  className=" btn text-white bg-blue-400 border-blue-400 hover:border-blue-500 hover:bg-blue-500"
                >
                  LOGIN AS DOCTOR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#C9DEFD] from-3% via-white via-45% to-[#E4F2FF] to-96%">
        <div className="text-black py-12 text-4xl">
          <p> </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
