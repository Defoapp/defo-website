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
            className="font-bold font-bubblegum tracking-wider text-4xl md:text-5xl text-white text-center my-12 py-5 bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50%"
          >
            Timeline
          </h1>
        </div>

        {/* timeline */}
        <div className="w-11/12 md:w-5/6 lg:w-4/6 mx-auto my-10 px-2 sm:px-4">
          <div className="relative border-l-2 border-black ml-4 md:ml-28 space-y-12 pb-8">
            {/* Timeline Item 1 */}
            <div className="relative pl-8 md:pl-10">
              {/* Year indicator on left for desktop */}
              <div className="md:absolute md:-left-28 md:top-0 text-xl md:text-3xl font-bold text-defoBlue mb-2 md:mb-0">
                2022
              </div>
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <img src={firsticon} alt="Inception icon" className="w-5 h-5 object-contain" />
              </div>
              <div className="max-w-3xl">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  className="mb-3 text-lg md:text-2xl font-medium text-black"
                >
                  The inception of <span className="font-bold">Defo</span>. A small team with a big dream laid the foundation for what would become a go-to destination for edutainment enthusiasts.
                </p>
                <div className="mb-4">
                  <h2 data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-bold text-gray-700">
                    Jul 22, 2022
                  </h2>
                </div>
                <div>
                  <img
                    data-aos="fade-right"
                    data-aos-delay="100"
                    src={firstPicture}
                    alt="Defo inception"
                    className="w-full sm:w-4/5 lg:w-3/5 rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 md:pl-10">
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <img src={secondicon} alt="Website launch icon" className="w-5 h-5 object-contain" />
              </div>
              <div className="max-w-3xl">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="mb-3 text-lg md:text-2xl font-medium text-black"
                >
                  Witness the grand reveal of Defo's infotainment <span className="font-bold">website</span>. A user-friendly platform designed to deliver a seamless and immersive experience to our audience.
                </p>
                <div className="mb-4">
                  <h2 data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-bold text-gray-700">
                    Aug 30, 2022
                  </h2>
                </div>
                <div>
                  <img
                    data-aos="fade-right"
                    data-aos-delay="100"
                    src={secondPicture}
                    alt="Website reveal"
                    className="w-full sm:w-4/5 lg:w-3/5 rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 md:pl-10">
              {/* Year indicator */}
              <div className="md:absolute md:-left-28 md:top-0 text-xl md:text-3xl font-bold text-defoBlue mb-2 md:mb-0">
                2023
              </div>
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <img src={thirdicon} alt="App launch icon" className="w-5 h-5 object-contain" />
              </div>
              <div className="max-w-3xl">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="mb-3 text-lg md:text-2xl font-medium text-black"
                >
                  The moment that changed it all! <span className="font-bold">Defo officially launched</span> its groundbreaking entertainment app, bringing joy and excitement to millions worldwide.
                </p>
                <div className="mb-4">
                  <h2 data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-bold text-gray-700">
                    Jan 19, 2023
                  </h2>
                </div>
                <div>
                  <img
                    data-aos="fade-right"
                    data-aos-delay="100"
                    src={thirdPicture}
                    alt="App launch"
                    className="w-full sm:w-4/5 lg:w-3/5 rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative pl-8 md:pl-10">
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <img src={fourthicon} alt="Join Creator icon" className="w-5 h-5 object-contain" />
              </div>
              <div className="max-w-3xl">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="mb-3 text-lg md:text-2xl font-medium text-black"
                >
                  Celebrate with us as we introduce <span className="font-bold">“Join Creator”</span>, a game-changing addition to our app. Users experienced a new level of entertainment like never before.
                </p>
                <div className="mb-4">
                  <h2 data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-bold text-gray-700">
                    Jun 05, 2023
                  </h2>
                </div>
                <div>
                  <img
                    data-aos="fade-right"
                    data-aos-delay="100"
                    src={fourthPicture}
                    alt="Join Creator launch"
                    className="w-full sm:w-4/5 lg:w-3/5 rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative pl-8 md:pl-10">
              {/* Year indicator */}
              <div className="md:absolute md:-left-28 md:top-0 text-xl md:text-3xl font-bold text-defoBlue mb-2 md:mb-0">
                2024
              </div>
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <img src={fifthicon} alt="Website updates icon" className="w-5 h-5 object-contain" />
              </div>
              <div className="max-w-3xl">
                <p
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="mb-3 text-lg md:text-2xl font-medium text-black"
                >
                  We're thrilled to introduce the latest update to Defo’s Website. Our team has been hard at work to bring you an enhanced and seamless experience.
                </p>
                <div className="mb-4">
                  <h2 data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-bold text-gray-700">
                    Jan 01, 2024
                  </h2>
                </div>
                <div>
                  <img
                    data-aos="fade-right"
                    data-aos-delay="100"
                    src={fifthPicture}
                    alt="Website update"
                    className="w-full sm:w-4/5 lg:w-3/5 rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Timeline;
