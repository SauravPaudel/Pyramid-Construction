import React from 'react'
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] bg-[#ffff]">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000" data-aos-easing="ease" data-aos-once="false">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-blue-400">
              Our Services
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-green sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p className="text-base text-body-color dark:text-dark-6 px-2 ">
              There are many variations of services that are offered by Pyramid Construction that meets the coustomers satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap"     data-aos="fade-up" data-aos-delay="60" data-aos-duration="1000" data-aos-easing="ease" data-aos-once="false">
        <ServiceCard
          title="Commercial Construction"
          details="Office buildings | Retail spaces | Warehouses Design"
          icon={
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="800px" height="800px" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
           
           <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
           fill="#000000" stroke="none">
           <path d="M315 520 c-23 -26 -13 -68 19 -76 39 -9 60 -1 70 28 19 54 -50 91
           -89 48z"/>
           <path d="M140 410 c-12 -16 -28 -30 -36 -30 -19 0 -14 -30 6 -40 203 -97 280
           -135 280 -139 0 -2 -6 -12 -14 -20 -8 -9 -18 -28 -21 -44 l-7 -27 100 0 101 0
           -31 68 c-44 94 -46 97 -73 72 -28 -27 -48 -18 -64 28 -57 159 -60 162 -161
           162 -54 0 -60 -2 -80 -30z m54 -44 c-6 -16 -24 -23 -24 -8 0 10 22 33 27 28 2
           -2 1 -11 -3 -20z"/>
           <path d="M144 212 c-23 -86 -22 -102 7 -102 15 0 27 16 45 57 24 54 27 56 40
           38 8 -10 14 -28 14 -40 0 -31 24 -59 44 -52 17 7 20 34 10 86 -6 27 -17 37
           -65 62 -32 16 -62 29 -66 29 -5 0 -17 -35 -29 -78z"/>
           </g>
           </svg>
          }
        />
        <ServiceCard
          title="Residential Construction"
          details="Custom homes | Home additions | Renovations and design"
          icon={
            <svg fill="#000000"  xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 494.393 494.393">
<g>
	<g>
		<path d="M422.098,214.453L262.342,83.739c-8.818-7.215-21.501-7.215-30.32,0L72.264,214.453
			c-5.557,4.547-8.779,11.348-8.779,18.527v232.901c0,13.223,10.718,23.939,23.939,23.939h97.352V353.857
			c0-9.696,7.86-17.557,17.556-17.557h89.7c9.695,0,17.555,7.859,17.555,17.557v135.965h97.354
			c13.221,0,23.938-10.718,23.938-23.938V232.98C430.877,225.8,427.654,219,422.098,214.453z"/>
		<path d="M494.32,197.802c-0.053-7.561-3.525-14.689-9.443-19.394l-203.6-161.821c-9.854-8-21.902-12.003-33.954-12.014
			c-0.04,0-0.079-0.003-0.118-0.003c-0.115,0-0.229,0.006-0.345,0.007c-11.981,0.057-23.947,4.056-33.746,12.01L9.515,178.409
			c-5.918,4.704-9.39,11.833-9.444,19.394c0,0.1-0.071,10.05-0.071,18.72c0,13.808,11.193,25,25,25c13.807,0,25-11.192,25-25
			c0-2.127,0.004-4.325,0.011-6.43L231.906,65.522c0,0,7.29-5.441,15.29-5.441c8,0,15.16,5.337,15.16,5.337l182.025,144.675
			c0.008,2.104,0.012,4.303,0.012,6.43c0,13.808,11.193,25,25,25s25-11.192,25-25C494.393,207.853,494.322,197.902,494.32,197.802z"
			/>
	</g>
</g>
</svg>
          }
        />
        <ServiceCard
          title="Industrial Construction"
          details="Factories | Manufacturing plants | Industrial warehouses"
          icon={
            <svg
             fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
<g>
	<g>
		<path d="M459.633,240.01L448.996,0H337.772l-10.931,246.651l-13.93,7.462l-6.782-179.978h-75.696l-6.141,162.956l-73.478,39.363
			v-64.497L0.001,292.748V512h511.999V211.956L459.633,240.01z M366.87,30.417h53.028l9.993,225.525l-38.288,20.511v-64.497
			l-27.619,14.796l-5.957,3.192L366.87,30.417z M259.726,104.551h17.112l6.239,165.544l-11.867,6.357v-64.497l-15.851,8.491
			L259.726,104.551z M30.418,481.583V310.96l89.978-48.202v64.497l102.568-54.947l17.828-9.55v64.497l84.483-45.259v0.001
			l35.913-19.239v64.497l99.94-53.538l20.456-10.958v218.825H30.418z"/>
	</g>
</g>
<g>
	<g>
		<path d="M50.699,378.739v82.562H276.8v-82.562H50.699z M115.926,430.885h-34.81v-21.728h34.81V430.885z M181.155,430.885h-34.811
			v-21.728h34.811V430.885z M246.383,430.885h-34.81v-21.728h34.81V430.885z"/>
	</g>
</g>

</svg>
          }
        />
        <ServiceCard
          title="Hydropower Construction"
          details="Installation | Repair | Construction and Maintain"
          icon={
            <svg 
            fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  version="1.1"><path d="M16,9V11H8V9H10V8H4V10H2V2H4V4H12A2,2 0 0,1 14,6V9H16M10,15V18A2,2 0 0,0 12,20H20V22H22V14H20V16H14V15H16V13H8V15H10Z" />
            
            </svg>
          }
        />
        <ServiceCard
          title="Roofing Services"
          details="Roof installation | Roof repair | Roof maintenance"
          icon={
            <svg
             fill="#000000" width="800px" height="800px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" ><path d="M8.149 16.062h6.06l-.053 3.575-6.007 5.406v-8.981zM24.907 14.083l-23.907 21.086 2.52 2.831 21.485-18.954 21.481 18.954 2.514-2.831-23.903-21.086-.097-.083-.093.083z"/>
        
             </svg>
          }
        />
        <ServiceCard
          title="Landscaping Services"
          details="Land clearing | Landscaping & Site development"
          icon={
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512">
         <g>
           <g>
             <path d="M395.231,0l-50.854,50.853l32.958,32.958L178.537,282.609l-52.117-52.117l-94.351,94.352
               c-42.758,42.758-42.758,112.33,0,155.087C53.447,501.31,81.529,512,109.612,512c28.083,0,56.166-10.689,77.544-32.069
               l94.352-94.352l-52.116-52.116L428.19,134.666l32.957,32.958L512,116.769L395.231,0z M186.389,333.464l-40.004,40.004
               l-7.851-7.851l40.004-40.004L186.389,333.464z M238.506,385.58l-72.851,72.851c-30.901,30.901-81.182,30.902-112.085,0
               c-30.901-30.902-30.901-81.183,0-112.085l72.85-72.851l30.616,30.615L95.53,365.616l50.855,50.853l61.505-61.505L238.506,385.58z
                M207.89,311.961l-7.851-7.851l198.797-198.798l7.852,7.852L207.89,311.961z M424.262,87.736L398.836,62.31l-11.458-11.457
               l7.852-7.852l73.766,73.767l-7.851,7.851L424.262,87.736z"/>
           </g>
         </g>
         </svg>
          }
        />
      </div>
    </div>
    
        
  </section>
  )
}
const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-green-100 p-10 shadow-md hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-[#ffff]">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-black">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
      
     
    </>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Services

