import React, { useState } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AddAdmin from './pages/AddAdmin/AddAdmin'
import AddProduct from './pages/AddProduct/AddProduct'
import AddBlog from './pages/AddBlog/AddBlog'
import Dashboard from './pages/Dashboard/Dashboard'
import RefDash from './pages/RefDashboard/RefDash'
import Homepage from './pages/Homepage/Homepage'
import Blogs from './pages/Blogs/Blogs'
import LogUser from './pages/LogUser/LogUser'
import About from './pages/About/About'
import CourseLandingPage from './pages/CourseLandingPage/CourseLandingPage'
import LogAdmin from "./pages/LogAdmin/LogAdmin"
import AllCoursePage from './pages/AllCoursePage/AllCoursePage'
import AddUser from './pages/AddUser/AddUser'
import MyLearning from './pages/MyLearning/MyLearningPage'
import StripeContainer from './components/PaymentForm/StripeContainer'
import MyCourse from './pages/MyCourse/MyCourse'
import Player from './pages/Player/Player'
import UrlMaker from './pages/UrlMaker/UrlMaker'
import Terms from './pages/Terms&Conditions/Terms'
import UpdatePassword from './pages/UpdatePassword/UpdatePassword'
import Verify from './pages/Verify/Verify'
import Blog from './pages/Blog/Blog'

const App = () => {
  const arr = [];
  const findDomain = async () => {
    const host = window.location.host; // gets the full domain of the app
    const array = (host
      .split(".")
      .slice(0, host.includes("localhost") ? -1 : -2));
    arr.push(array)
  }

  findDomain();

  return (
    <div className='main-app'>
      {console.log(arr)}
      <BrowserRouter>
        {arr[0] == "admin" ?
          (
            <>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route path='/addProduct' element={<AddProduct />} />
                <Route path='/urlmaker' element={<UrlMaker />} />
                <Route path='/addBlog' element={<AddBlog />} />
                <Route path='/addadmin' element={<AddAdmin />} />
                <Route path='/refDash' element={<RefDash />} />
                <Route path='/logadmin' element={<LogAdmin />} />
                {/* <Route path='/stream' element={<Stream />} /> */}
                <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
              </Routes>
            </>
          ) : arr[0].length == 0 ?
            (
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route exact path='/blogs' element={<Blogs />} />
                <Route path='/blog/:slug' element={<Blog />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/course' element={<CourseLandingPage />} />
                <Route exact path='/courses' element={<AllCoursePage />} />
                <Route path='/addUser' element={<AddUser />} />
                <Route path='/logUser' element={<LogUser />} />
                <Route path='/mylearning' element={<MyLearning />} />
                <Route path='/mycourse' element={<MyCourse />} />
                <Route path='/payment' element={<StripeContainer />} />
                <Route path='/video' element={<Player />} />
                <Route path="/terms&condition" element={<Terms />} />
                <Route path='/updatepass' element={<UpdatePassword />} />
                <Route path='/verify' element={ <Verify />} />
              </Routes>
            ) :
            (
              <>
                <h1>Page Not Found</h1>
              </>
            )
        }
      </BrowserRouter>
    </div>

  )
}

export default App