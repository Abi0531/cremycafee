import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Kashbi",
    text: "Have been to the Coffee shop at Jaffna several times and serves one of the best buffets in Jaffna. Hence thought of making a comment.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dipakkumar",
    text: "This coffee shop is amazing! The aroma of freshly brewed coffee hits you the moment you step in. The cozy ambiance makes it a perfect spot for both work and relaxation. Their latte is a must-try, and the pastries are always fresh. Highly recommend it for all coffee lovers!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Kashbi",
    text: "Absolutely love this place! The staff is super friendly, and the coffee is top-notch. The mocha has the perfect balance of chocolate and espresso, and their signature cold brew is a game changer. A great spot to catch up with friends or enjoy some quiet time with a book!",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        {/* Testimonials Card Section */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => {
              return (
                <div className="my-6" key={data.id}>
                  <div
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                    bg-primary/10 relative"
                  >
                    {/* Image Section */}
                    <div className="mb-4 text-center">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20 mx-auto"
                      />
                    </div>
                    {/* Content Section */}
                    <div>
                      <p className="text-gray-700 text-sm italic">
                        "{data.text}"
                      </p>
                      <p className="mt-4 text-gray-900 font-bold text-lg text-center">
                        - {data.name}
                      </p>
                    </div>
                    <p className="text-black/20 text-9xl
                    font-serif absolute top-0 right-0">
                        ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
