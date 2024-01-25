import React from 'react'
import './Home.css'
import About from './About'
import Services from './Services'
import Project from './Project'
import Teams from './Teams'

const Home = () => {
  return (
    <>
    <section className='hcontainer'>
      <div className='position: absolute top-[150px] left-[250px] '>
      <span className='flex font-bold text-6xl py-3 tracking-wider subpixel-antialiased text-blue-400'>Quality & </span>
      <span className='font-bold text-6xl tracking-wider subpixel-antialiased text-black'>Integrity</span>
      <p className='w-[500px] text-justify font-medium py-4 mt-4 text-black'>Welcome to Pyramid Construction, where craftsmanship meets innovation. As a leading force in the construction industry, we pride ourselves on delivering excellence in every project we undertake. With a dedicated team of skilled professionals, we bring your visions to life, one brick at a time. At Pyramid Construction, we stand tall on the pillars of quality, integrity, and customer satisfaction. Let us build your dreams into reality.</p>
      <button className='expbtn'> <span>Explore</span></button>
      </div>
      <div className="custom-shape-divider-top-1705557911">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
<div className="flex flex-col items-center">
  <h1 className='font-bold text-3xl text-black position: absolute top-[650px]'>We Provide</h1>
</div>
    
      
  
    </section>
    <div>
      <Services />
      <Project />
      <Teams />
      <About />
    </div>
    </>
  )

  
}
export default Home