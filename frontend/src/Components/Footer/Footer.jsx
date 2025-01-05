import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6"; // Correct import
import FooterBg from "../../assets/coffee-footer.jpg"; // Ensure this path is correct

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`, // Fixed template string syntax
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat", // Fixed typo
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5 gap-8">
          {/* Company Details */}
          <div>
            <h1 className="text-2xl font-bold mb-4 font-cursive">Coffee Cafe</h1>
            <p className="text-sm">
              Your perfect coffee destination, delivering the finest blends
              right to your cup.
            </p>
            <div className="flex gap-4 mt-4">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-2xl hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-cursive">Quick Links</h2>
            <ul className="space-y-2">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-cursive">Subscribe to our Newsletter</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded bg-white text-black"
              />
              <button className="bg-primary text-white py-2 rounded hover:bg-primary/80 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/*company address */}
          <div className="py-8 px-4 col-span-2
          sm:col-auto">
             <ul className="space-y-2">
            <h1 className="text-xl font-cursive font-bold
            sm:text-left mb-3"> 
                Address
            </h1>
            <div>
                <p className="mb-3"> jaffna srilanka </p>
                <p> Phone: 0772549910</p>
                <p> Email:cremycafe&creation@gmail.com</p>
            </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
