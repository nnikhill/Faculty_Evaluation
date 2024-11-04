import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import facultyimg from "../Assets/facultyimg.gif";
import logo from "../Assets/logo.jpg";

const Facultylogin = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error message

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/api/facultylogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });
      
      if (response.ok) {
        // On successful login, navigate to faculty dashboard
        navigate('/facultydash');
      } else {
        // Handle error response
        const data = await response.json();
        setError(data.error || 'Login failed. Please try again.'); // Show error
      }
    } catch (error) {
      setError('Server error. Please try again later.'); // Show server error
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
              <h1 className="text-2xl xl:text-3xl font-bold">Faculty Login</h1>
              
              {error && <p className="text-red-500">{error}</p>} {/* Show error message */}

              <form className="w-full flex-1 mt-8" onSubmit={handleLogin}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required // Make field required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    required // Make field required
                  />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-purple-500 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit" // Change to submit type
                  >
                    <span className="ml-3">Login Here</span>
                  </button>
                </div>
              </form>

              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by the Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${facultyimg})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facultylogin;
