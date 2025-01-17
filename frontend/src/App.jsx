import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

// Importing Components
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Services from './Components/Services/Services.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton.jsx';
import Login from './Components/Login/login.jsx';
import Register from './Components/Register/Register.jsx';
import Order from './Components/Order/Order.jsx';

// Admin Components
import Sidebar from './Admin/Component/Sidebar/Sidebar.jsx';
import AdminHome from './Admin/Component/Home/Adminhome.jsx';
import StaffManagement from './Admin/Component/StaffManagement/StaffManagement.jsx';
import SalaryManagement from './Admin/Component/SalaryManagement/SalaryManagement.jsx';
import OrderManagement from './Admin/Component/OrderManagement/OrderManagement.jsx';
import Adminhome from './Admin/Component/Home/Adminhome.jsx';
import EditOrder from './Admin/Component/OrderManagement/EditOrder.jsx';


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          {/* Main Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Services />
                <Menu />
                <About />
                <Contact />
                <Testimonial />
                <Banner />
                <Footer />
                <ScrollToTopButton />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Routes>
                    <Route path="home" element={<AdminHome />} />
                    {/* Add more admin routes here */}
                    <Route path="staff" element={<StaffManagement />} />
                    <Route path="salary" element={<SalaryManagement />} />
                    <Route path="order" element={<OrderManagement />} />
                    <Route path="dashboard" element={<Adminhome />} />
                    <Route path="editOrder" element={<EditOrder/>}/>

                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
