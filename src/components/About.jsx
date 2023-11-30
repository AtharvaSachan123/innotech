import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import abouticon from "../assets/about.png";
import register from "../assets/register.png";
import schedule from "../assets/schedule.png";
import submit from "../assets/submit.png";
import imgData from "../data/imgData.json";
import fitt from "../assets/fitt.png";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
    if (!hasPrev) {
      return null;
    }
    return (
      <button
        className="carousel-arrow carousel-prev-arrow l z-20 absolute transform left-0 top-1/2 -translate-x-3"
        onClick={onClickHandler}
        title={label}
      >
        <div
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white  sm:w-6 sm:h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </span>
        </div>
      </button>
    );
  };

  const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
    if (!hasNext) {
      return null;
    }
    return (
      <button
        className="carousel-arrow carousel-next-arrow z-20 absolute right-0  transform top-1/2 translate-x-3"
        onClick={onClickHandler}
        title={label}
      >
        <div
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </div>
      </button>
    );
  };

  return (
    <section id="about" className="pt-12 xl:pt-36  ">
      <div className=" flex flex-col-reverse px-4 lg:flex-row items-center justify-center w-full  mx-auto">
        <div className="lg:w-[600px] md:w-[800px] mx-2 lg:pt-0 pt-10">
          <div className="shadow-lg  rounded ">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={renderCustomPrevArrow}
              h-full
              renderArrowNext={renderCustomNextArrow}
              infiniteLoop
              interval={3500}
            >
              {imgData.map((item) => (
                <div>
                  <img src={item.link} alt="Image 1" />
                </div>
              ))}
            </Carousel>{" "}
          </div>
        </div>
        <div className="flex justify-center items-center w-full  lg:w-[60%] p-2">
          <div className="flex flex-col justify-between w-full xl:ml-12 lg:px-8 xl:w-[70%]">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-center flex items-center md:text-left text-[#212A5C] font-semibold text-2xl sm:text-3xl">
                <span className="pr-1 font-Montserrat">
                  <img src={abouticon} className="w-7" alt="" />
                </span>
                ABOUT FOREST WATCHER
              </h3>
              <p className="font-Roboto text-justify text-md sm:text-lg lg:text-xl pt-2 font-gray-800">
                Welcome to Forest Watcher, an initiative dedicated to the
                preservation and protection of our precious forests. Our
                platform serves as a hub for individuals passionate about
                environmental conservation, wildlife protection, and sustainable
                practices. Whether you're a nature enthusiast, researcher, or
                conservationist, Forest Watcher provides a unified space for
                collaboration and information exchange. Explore the latest
                developments in forest management, biodiversity conservation,
                and technology-driven solutions for monitoring and safeguarding
                our ecosystems.
              </p>
              <p className="font-Roboto text-md sm:text-lg lg:text-xl pt-2 font-gray-800 mt-4 mb-2">
                Join us in our mission to create a positive impact on the
                environment. All members are expected to adhere to our Code of
                Conduct, fostering a respectful and inclusive community
                dedicated to the well-being of our planet.
              </p>

              <div className="flex flex-wrap sm:flex-wrap-none">
                <button
                  onClick={() => scrollToSection("register")}
                  className="mt-4 flex justify-between mr-2  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4 items-center"
                >
                  <div className="mr-1">
                    <img src={register} className="w-6 " alt="" />
                  </div>
                  <span>Register</span>
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="mt-4 flex justify-between ml-2 rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4 items-center"
                >
                  <div className="mr-1">
                    <img src={schedule} className="w-6 " alt="" />
                  </div>
                  <span>frequently asked questions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-[#212A5C] bg-[#DFE4EF] flex justify-center items-center">
        <div>
          <h1 className="text-xl font-Roboto  tracking- leading-none">
          Franklin D. Roosevelt -
          </h1>
        </div>
        <p className="text-lg mt-[0.1rem] font font-Montserrat ml-2 ">
          {" "}
          Forests are the lungs of our land, purifying the air and giving fresh strength to our people. 
        </p>
        <a
          href="https://home.iitd.ac.in/"
          target="blank"
          rel="noopener noreferrer"
        >
          {/* <img src={fitt} className="w-36 h-36" alt="" /> */}
        </a>
      </div>
    </section>
  );
};

export default About;
