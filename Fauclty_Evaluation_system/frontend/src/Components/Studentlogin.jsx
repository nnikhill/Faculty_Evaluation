import React, { useState } from 'react';
import stdimg from "../Assets/stdimg.gif";
import logo from "../Assets/logo.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from 'axios'; // Import axios for making API calls

const Studentlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:5000/api/studentlogin', {
        email,
        password,
      });

      // Assuming response contains the student data and login was successful
      if (response.data.success) {
        // Navigate to student dashboard
        navigate('/studentdash');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <>
      <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
          <div className="flex items-center">
            <a href="/">
              <img className="block h-14 w-auto" src={logo} alt="Logo" />
            </a>
          </div>

          <div className="flex items-center justify-center">
            <a
              className="rounded-md bg-purple-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]"
              href="/login"
            >
              Go Back
            </a>
          </div>
        </nav>
      </header>

      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-bold">Student_login</h1>
              {error && <div className="text-red-500">{error}</div>} {/* Error message display */}
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  {/* Login with Google and GitHub buttons can remain here */}

                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Or Login with e-mail
                    </div>
                  </div>

                  <form className="mx-auto max-w-xs" onSubmit={handleLogin}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state
                      required
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update password state
                      required
                    />
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-purple-500 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">Login Here</span>
                    </button>
                  </form>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${stdimg})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentlogin;
