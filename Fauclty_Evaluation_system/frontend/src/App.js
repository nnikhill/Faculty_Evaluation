import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Selection from './Components/Selection';
import Adminlogin from './Components/Adminlogin';
import Studentlogin from './Components/Studentlogin';
import Facultylogin from './Components/Facultylogin';
import Dashboard from './Components/Dashboard/Admin/Admindashboard';
import Signup from './Components/Signup';
import Facultydash from './Components/Dashboard/Faulty/Facultydash';
import Studentdash from './Components/Dashboard/Student/Studentdash';
import TeacherReviewForm from './Components/Dashboard/Student/TeacherReviewForm';
import ReviewChart from './Components/Dashboard/Faulty/chart';




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Selection/>} />
           <Route path="/adminlogin" element={<Adminlogin />} />
           <Route path="/Studentlogin" element={<Studentlogin />} />
           <Route path="/Facultylogin" element={<Facultylogin />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/admindash" element={<Dashboard />} />
           <Route path="/facultydash" element={<Facultydash />} />
           <Route path="/studentdash" element={<Studentdash />} />
           <Route path="/reviewchart" element={<ReviewChart />} />
           <Route path="/reviewform" element={<TeacherReviewForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
