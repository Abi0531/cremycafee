import React from 'react'
import Logo from "../../assets/coffee_logo.png";
import {FaCoffee} from "react-icons/fa";
import { Link } from "react-router-dom";


const Menus = [
{
    id: 1,
    name: "Home",
    link: "/",
},
{
    id:2,
    name: "Menu",
    link:"/#menu",
},
{
    id:2,
    name: "Services",
    link:"/#services",
},
{
    id: 3,
    name: "About",
    link: "/#about",
},
{
    id: 3,
    name: "Contact",
    link: "/#contact",
},
]


const Navbar = () => {
  return (
    <div className= "bg-gradient-to-r from-secondary to-secondary/90 text-white fixed top-0 left-0 w-full z-50 shadow-lg"> 
        <div className="container py-2">
            <div className="flex justify-between items-center gap-4">
                {/*logo section  */}
                <div className=''> 
                    <a href="#" className="font-bold text-2xl
                    sm:text-3xl flex justify-center
                    items-center gap-2
                    tracking-wider font-cursive">
                        <img src={Logo} alt="Logo"
                        className='w-14'/>
                         Cremy Cafe  
                         </a>
                     </div>
                {/* link section */}
                <div className='flex justify-between items-center gap-4'>
                    <ul className='hidden sm:flex items-center gap-4'>
                        {
                            Menus.map((data,index) => (
                                <li key ={index}>
                                    <a href={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover: text-white duration-200'>
                                        {data.name}
                                        </a>
                                </li>
                            ))}
                     </ul>
                     <Link
              to="/login"
              className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3"
            >
              Login
              <FaCoffee className="text-xl cursor-pointer" />
            </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar