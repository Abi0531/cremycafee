import React from 'react';
import Img1 from "../../assets/coffee2.png";
import Img2 from "../../assets/coffee2.png";
import Img3 from "../../assets/coffee2.png";

const ServicesData = [
    {
        id:1,
        img:Img1,
        name:"Espresso",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
        aosDelay:"100",
    },
    {
        id:2,
        img:Img2,
        name:"Americano",
        description:
        "Lorem ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
        aosDelay:"300",
    },
    {
        id:3,
        img:Img3,
        name:"Cappuccino",
        description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet.",
        aosDelay:"500",
    },
]
const Services = () => {
  return (
    <>
    <span id= "services">  </span>
    <div className='py-10'>
        <div className='Container'>

            {/*header title */}

        <div className='text-center mb-20'>
        <h1 className='text-4xl font-bold font-cursive 
        text-gray-800 '> 
            Best Coffee For You
        </h1>
        </div>

       {/*Services Card Section*/} 

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
        {ServicesData.map((data,index) => {
                return(
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key ={index} className='rounded-2xl bg-white
                    hover:bg-primary hover:text-white
                    shadow-xl duration-200 max-w-[300px] group
                    relative'
                    >
                        {/*img section*/}
                        

                        <div className='h-[200px]'>
                            <img src={data.img} 
                            alt=""
                             className='max-w-[200px] block mx-auto
                             transform-translate-y-14
                             group-hover:scale-110
                             group-hover:rotate-6 duration-300'
                             />
                        </div>

                        {/*Text content*/}
                        <div className='p-4 text-center'> 
                            <h1 className='text-xl font-bold'>
                                 {data.name} 
                                  </h1>
                            <p className='text-gray-500
                            group-hover:text-white duration-300
                            text-sm line-clamp-2'> {data.description} </p>
                        </div>
                    </div>
                );
            })
        }
       </div>
        </div>
   </div>
   </>
  )
};
export default Services;
