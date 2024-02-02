import React from "react"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import budling1 from '../../assets/2.png'
import budling2 from '../../assets/3.png'
import budling3 from '../../assets/4.png'
import budling4 from '../../assets/7.png'
import budling5 from '../../assets/8.png'
import budling6 from '../../assets/9.png'
import budling7 from '../../assets/11.png'

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardData = [
    {
      image: budling6,
      title: "Residential Building",
      date: "2014",
      location: ["Bhaisepati, Lalitpur"],
    },
    {
      image: budling2,
      title: "School Building of Future Star School",
      date: "2014",
      location: ["Jawalakhel, Lalitpur"],
    },
    {
      image: budling3,
      title: "Commercial Complex",
      date: "2015",
      location: ["Jhamsikhel, Lalitpur,"],
    },
    {
      image: budling5,
      title: "Commercial Complex",
      date: "2018",
      location: ["Battisputali, Kathmandu"],
    },
    {
      image: budling4,
      title: "Commercial Building",
      date: "2021",
      location: ["Baneshwor, Kathmandu"],
    },
    {
      image: budling3,
      title: "Residence Building",
      date: "2015",
      location: ["Sanepa, Lalitpur"],
    },
    {
      image: budling7,
      title: "Commercial Building of Sero Lab",
      date: "2015",
      location: ["Sanepa, Lalitpur"],
    },
    {
      image: budling3,
      title: "Commercial Complex ",
      date: "2015",
      location: ["Jhamsikhel, Lalitpur"],
    },
    {
      image: budling1,
      title: "Upper Piluwa Khola Hydropower",
      date: "2022-Under Construction",
      location: ["Sankhuwasabha "],
    },
    
  ];
  return (
    <section className='pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]'>
      <div className="-mx-4 flex flex-wrap" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000" data-aos-easing="ease" data-aos-once="false">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-blue-400">
              Our Projects
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-green sm:text-4xl md:text-[40px]">
              Complete and Ongoing 
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
            Explore the impressive portfolio of Pyramid Construction, showcasing their commitment to excellence in the construction industry.</p>
          </div>
        </div>
      </div>

     {/* Components of Projects  */}
    
    <div className="w-full pt-[8rem] px-4 bg-white z-0" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000" data-aos-easing="ease" data-aos-once="false">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 z-0">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="object-cover h-48 w-96 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-2xl ">{card.date}</p>
            <div className="text-center font-medium">
              {card.location.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <Link to='/About'
              className={`bg-[#030637] text-white text-center hover:text-[#030637] hover:bg-gray-100 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Explore
            </Link>
            
          </div>
          
        ))}
      </div>

    </div>
    </section>
    
  )
}

export default Project