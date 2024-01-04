import React from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

import infoGraphics from "../image/OurStory/illustration.svg";

// time line images
import firstPicture from "../image/OurStory/timeline/timeline images/5573520_2928997 1.svg";
import secondPicture from "../image/OurStory/timeline/timeline images/12643952_5028426 1.svg";
import thirdPicture from "../image/OurStory/timeline/timeline images/image 2.svg";
import fourthPicture from "../image/OurStory/timeline/timeline images/join_Creator.svg";
import fifthPicture from "../image/OurStory/timeline/timeline images/updates.svg";

// bar icons
import firsticon from "../image/OurStory/timeline/bar icon/mingcute_code-fill.svg";
import secondicon from "../image/OurStory/timeline/bar icon/mdi_web.svg";
import thirdicon from "../image/OurStory/timeline/bar icon/arcticons_creator-studio.svg";
import fourthicon from "../image/OurStory/timeline/bar icon/Group 72.svg";
import fifthicon from "../image/OurStory/timeline/bar icon/mdi_web.svg";
// -----------------------

// function isMobile() {
//   return window.innerWidth <= 768; // Adjust the width as needed for your definition of mobile
// }

const Timeline = () => {
  React.useEffect(() => {
    // if (isMobile()) {
    //   AOS.init({
    //     disable: true
    //   });
    // } else
    //  {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    // };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Navbar />
      <div className="w-full h-full">
        {/* hero section */}

        <div className="w-full flex flex-wrap my-10 py-10">
          <div className="w-full  my-5 lg:my-0 lg:w-1/2">
            <img
              data-aos="fade-right"
              data-aos-delay="100"
              className="w-4/6 mg:5/6 lg:w-3/6 mx-auto"
              src={infoGraphics}
              alt="loading"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full lg:w-1/2  text-2xl px-5 lg:px-32 "
          >
            <h1 className="text-4xl font-semibold text-center my-5 lg:my-3">
              OUR STORY
            </h1>
            <h1 className="text-2xl text-center leading-10 lg:text-left">
              <span className="font-bold">At Defo,</span> we are more than just
              a brand – we are a journey, a vision, and a passion that has
              evolved over time. Our story is a testament to our dedication,
              values, and commitment to making a difference in the world. Our
              mission is to make learning enjoyable and accessible, fostering a
              positive attitude towards education.
            </h1>
          </div>
        </div>

        {/* desc setion */}
        <div className="w-full h-full text-center  bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50% py-2 px-8 md:px-28 lg:px-32">
          <h1 className="my-5  text-white text-xl md:text-2xl lg:text-4xl font-semibold">
            The Journey
          </h1>

          <p className="my-4 text-white text-xl md:text-xl lg:text-2xl">
            Our journey has been a remarkable one, filled with ups and downs,
            challenges, and triumphs. Explore our key milestones and memorable
            moments that have shaped the world of entertainment. Along the way,
            we've learned valuable lessons, forged lasting partnerships, and
            built a community that shares our passion and values.
          </p>
        </div>

        <div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-bold font-bubblegum tracking-wider text-5xl text-white text-center my-16 py-5  bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50% "
          >
            Time line
          </h1>
        </div>

        {/* timeline */}

        <div className=" w-5/6 lg:w-4/6 mx-auto my-10 ">
          <div className=" flex">
            {/* ----------------- */}
            {/* left side */}
            {/* ----------------- */}
            <ul className="w-fit mr-10 ">
              {/* <!--First item--> */}

              <div
                data-aos="zoom-in-down"
                data-aos-delay="100"
                className="h-1/6 mb-20 lg:mb-10    "
              >
                <h1 className="text-xl md:text-2xl lg:text-4xl flex justify-end font-semibold ">
                  2022
                </h1>
              </div>

              {/* <!--Second item--> */}
              <div
                data-aos="zoom-in-down"
                data-aos-delay="100"
                className="h-1/6 mb-5 "
              >
                <h1 className="text-xl md:text-2xl lg:text-4xl flex justify-end font-semibold ">
                  {" "}
                </h1>
              </div>

              {/* <!--Third item--> */}
              <div
                data-aos="zoom-in-down"
                data-aos-delay="100"
                className="h-1/6 mb-56  lg:mb-36"
              >
                <h1 className="text-xl md:text-2xl lg:text-4xl  flex justify-end font-semibold ">
                  2023
                </h1>
              </div>

              {/* <!--forth item--> */}
              <div
                data-aos="zoom-in-down"
                data-aos-delay="100"
                className="h-1/6 mb-6 "
              >
                <h1 className="text-xl md:text-2xl lg:text-4xl flex justify-end font-semibold ">
                  {" "}
                </h1>
              </div>

              {/* <!--fifth item--> */}
              <div
                data-aos="zoom-in-down"
                data-aos-delay="100"
                className="h-96 mb-16 "
              >
                <h1 className="text-xl md:text-2xl lg:text-4xl  flex justify-end font-semibold ">
                  2024
                </h1>
              </div>
            </ul>
            {/* ----------------- */}
            {/* right side of the time line */}
            {/* ----------------- */}
            <ul className="border-l-2 h-fit border-black ">
              {/* <!--First item--> */}
              <li className=" ">
                <div className="flex-start md:flex ">
                  <div className="-ml-[18px] lg:-ml-[16px] w-8  ">
                    <img
                      data-aos="fade-right"
                      data-aos-delay="100"
                      src={firsticon}
                      alt="loading"
                      className="bg-white border-2 border-black  rounded-full"
                    />
                  </div>
                  <div className="  lg:mb-2 ml-6 lg:ml-6  max-w-4xl  ">
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      className="mb-6 text-xl md:text-2xl lg:text-2xl font-medium text-black"
                    >
                      The inception of <span className="font-bold">Defo</span>.
                      A small team with a big dream laid the foundation for what
                      would become a go-to destination for edutainment
                      enthusiasts.
                    </p>
                    <div className="mb-4 ">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-xl font-bold "
                      >
                        Jul 22, 2022
                      </h1>
                    </div>
                    <div>
                      <img
                        data-aos="fade-right"
                        data-aos-delay="100"
                        src={firstPicture}
                        alt="loading"
                        className=" mx-auto sm:w-5/6 lg:w-3/6"
                      />
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--Second item--> */}
              <li className="h-2/5">
                <div className="flex-start md:flex ">
                  <div className="-ml-[16px] w-8 ">
                    <img
                      data-aos="fade-right"
                      data-aos-delay="100"
                      src={secondicon}
                      alt="loading"
                      className="bg-white border-2 border-black  rounded-full"
                    />
                  </div>
                  <div className="mb-2 ml-6  max-w-4xl  ">
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      className="mb-6 text-2xl font-medium text-black"
                    >
                      Witness the grand reveal of Defo's infotainment{" "}
                      <span className="font-bold">website</span>. A
                      user-friendly platform designed to deliver a seamless and
                      immersive experience to our audience.
                    </p>
                    <div className="mb-4 ">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-xl font-bold "
                      >
                        Aug 30, 2022
                      </h1>
                    </div>
                    <div>
                      <img
                        data-aos="fade-right"
                        data-aos-delay="100"
                        src={secondPicture}
                        alt="loading"
                        className=" mx-auto sm:w-5/6 lg:w-3/6"
                      />
                    </div>
                  </div>
                </div>
              </li>
              {/* <!--Third item--> */}
              <li className="h-2/5">
                <div className="flex-start md:flex ">
                  <div className="-ml-[16px] w-8">
                    <img
                      data-aos="fade-right"
                      data-aos-delay="100"
                      src={thirdicon}
                      alt="loading"
                      className="bg-white border-2 border-black  rounded-full"
                    />
                  </div>
                  <div className="mb-2 ml-6  max-w-4xl  ">
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      className="mb-6 text-2xl font-medium text-black"
                    >
                      The moment that changed it all!{" "}
                      <span className="font-bold">
                        Defo officially launched
                      </span>{" "}
                      its groundbreaking entertainment app, bringing joy and
                      excitement to millions worldwide.
                    </p>
                    <div className="mb-4 ">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-xl font-bold "
                      >
                        19 Jan, 2023
                      </h1>
                    </div>
                    <div>
                      <img
                        data-aos="fade-right"
                        data-aos-delay="100"
                        src={thirdPicture}
                        alt="loading"
                        className=" mx-auto sm:w-5/6 lg:w-3/6"
                      />
                    </div>
                  </div>
                </div>
              </li>
              {/* <!--fouth item--> */}
              <li className="h-2/5">
                <div className="flex-start md:flex ">
                  <div className="-ml-[16px] w-8 ">
                    <img
                      data-aos="fade-right"
                      data-aos-delay="100"
                      src={fourthicon}
                      alt="loading"
                      className="bg-white border-2 border-black  rounded-full"
                    />
                  </div>
                  <div className="mb-2 ml-6  max-w-4xl  ">
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      className="mb-6 text-2xl font-medium text-black"
                    >
                      Celebrate with us as we introduce{" "}
                      <span className="font-bold">“Join Creator”</span>, a
                      game-changing addition to our app. Users experienced a new
                      level of entertainment like never before.
                    </p>
                    <div className="mb-4 ">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-xl font-bold "
                      >
                        05 June, 2023
                      </h1>
                    </div>
                    <div className="my-20">
                      <img
                        data-aos="fade-right"
                        data-aos-delay="100"
                        src={fourthPicture}
                        alt="loading"
                        className=" mx-auto w-full lg:w-4/6"
                      />
                    </div>
                  </div>
                </div>
              </li>
              {/* <!--fifth item--> */}
              <li className="h-2/5">
                <div className="flex-start md:flex ">
                  <div className="-ml-[16px]  w-8 ">
                    <img
                      data-aos="fade-right"
                      data-aos-delay="100"
                      src={fifthicon}
                      alt="loading"
                      className="bg-white border-2 border-black  rounded-full"
                    />
                  </div>
                  <div className="mb-2 ml-6  max-w-4xl  ">
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      className="mb-6 text-2xl font-medium text-black"
                    >
                      We're thrilled to introduce the latest update to Defo’s
                      Website. Our team has been hard at work to bring you an
                      enhanced and seamless experience.
                    </p>
                    <div className="mb-4 ">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-xl font-bold "
                      >
                        Jan 01, 2024
                      </h1>
                    </div>
                    <div>
                      <img
                        data-aos="fade-right"
                        data-aos-delay="100"
                        src={fifthPicture}
                        alt="loading"
                        className=" mx-auto sm:w-5/6 lg:w-3/6"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------- */}
      </div>

      <Footer />
    </div>
  );
};

export default Timeline;
