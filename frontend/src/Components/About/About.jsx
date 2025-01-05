import React from "react";
import About1 from '../../assets/About1.jpg';
import About2 from '../../assets/About2.jpg';
import About3 from '../../assets/About3.jpg';

const About = () => {
  return (
    <>
      <span id="about"></span>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold font-cursive text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-center text-gray-600 text-lg mb-8">
            Welcome to <span className="font-bold">Creamy Creations & Creamy Cafe</span>, where every cup of coffee tells a story. 
            We're more than just a coffee shop – we're a place for connection, creativity, and community.
          </p>

          <div className="space-y-12">
            {/* Our Story Section */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <img
                src={About1} // Use the imported variable
                alt="Our Story"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded with a passion for the perfect brew, we started our journey to create a haven for coffee lovers. 
                  Each cup is crafted with precision and care, using the finest beans sourced sustainably from around the globe.
                </p>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To serve premium coffee and delightful treats in a warm and welcoming space. 
                  We aim to make every visit memorable by delivering exceptional quality, service, and a touch of love in every cup.
                </p>
              </div>
              <img
                src={About2} // Use the imported variable
                alt="Our Mission"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
            </div>

            {/* Our Values Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Values
              </h2>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <ul className="list-disc pl-6 space-y-2 text-gray-600 md:w-1/2">
                  <li><span className="font-bold">Quality:</span> We are committed to using the best ingredients and techniques to deliver perfection.</li>
                  <li><span className="font-bold">Community:</span> Building a space where everyone feels welcome and connected.</li>
                  <li><span className="font-bold">Sustainability:</span> Caring for the planet by sourcing responsibly and minimizing waste.</li>
                </ul>
                <img
                  src={About3} // Use the imported variable
                  alt="Our Values"
                  className="w-full md:w-1/2 rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-lg font-semibold text-gray-800">
              Join us for a cup of coffee and experience the magic yourself!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
