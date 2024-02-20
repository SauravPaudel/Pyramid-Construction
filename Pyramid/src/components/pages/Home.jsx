import React from "react";
import "./Home.css";
import Container from "./container";
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Teams from "./Teams";
import houseimg from ".//../../assets/hero.png";
import logo from "./../../assets/pyramid.png";
import worker from "./../../assets/Worker.png";
import construction from "./../../assets/construction.png";
import wall from "./../../assets/Bricks.png";
import Dozar from "./../../assets/Dozar.png";
import { Link } from "react-router-dom";

const Home = () => {
  const handleDirectionsClick = () => {
    const destinationLatitude = 27.681732;
    const destinationLongitude = 85.32745;

    const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatitude},${destinationLongitude}`;
    window.open(directionsLink, "_blank");
  };

  const facebookLink = () => {
    const directionsLink = `https://www.facebook.com/PESujan`;
    window.open(directionsLink, "_blank");
  };

  return (
    < >
      <section className="hcontainer z-1 overflow-hidden ">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/277674904_501928811444603_6841552494269669375_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_ohc=KlnORUSJc88AX-u2Mvq&_nc_ht=scontent.fktm1-1.fna&oh=00_AfDq01Mn-o6VGOvav1UkDNi-3ZjwJKwEaWhHAc9ej-Xy3A&oe=65D933C7")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Pyramid Construction
              </h1>
              <p className=" text-lg md:text-xl mb-8">
                Your trusted partner in building dreams.
              </p>
              <div className="text-lg md:text-xl  px-1">
                <p>Location: Chakupat 10, Lalitpur Sub-Metropolitan City </p>
                <p>Contact: +977 015543657 | sujan.pes@gmail.com</p>
              </div>

              <div className="flex flex-row gap-5 relative right-[115px] md:left-[185px]">
                <div className=" bg-indigo-600 rounded-3xl w-[180px] h-16 flex items-center flex-row-reverse relative left-32 top-10     ">
                  <Link
                    onClick={handleDirectionsClick}
                    className="px-8 py-4 text-lg font-bold text-center text-white "
                  >
                    {" "}
                    Direction
                  </Link>
                  <div className="absolute  right-32 ">
                    <svg
                      width="56px"
                      height="56px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#400707"
                      stroke-width="1.008"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M18.9762 5.5914L14.6089 18.6932C14.4726 19.1023 13.8939 19.1023 13.7575 18.6932L11.7868 12.7808C11.6974 12.5129 11.4871 12.3026 11.2192 12.2132L5.30683 10.2425C4.89772 10.1061 4.89772 9.52743 5.30683 9.39106L18.4086 5.0238C18.7594 4.90687 19.0931 5.24061 18.9762 5.5914Z"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>

                
                <div className=" bg-indigo-600 rounded-3xl w-[200px] h-16 flex items-center flex-row-reverse relative left-32 top-10     ">
                  <Link
                    onClick={facebookLink}
                    className="px-8 py-4 text-lg font-bold text-center text-white "
                  >
                    {" "}
                    Facebook
                  </Link>
                  <div className="absolute  right-32 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="max-sm:relative">
          <Services />
        </div>
        <Project />
        <About />
      </div>
    </>
  );
};

export default Home;
