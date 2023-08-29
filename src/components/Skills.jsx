import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"

function Skills() {
  return (
    <>
      <div style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-black  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
          I'm a front-end developer with 8+ years of experience and a focus on UX. To that end, I have honed my skills in writing succinctly, producing clean and efficient code, and building intuitive products. I get excited when talking about web apps vs. websites and believes that my value stems from the impact I can have on my client’s customers. I'm available to work on front-end projects with a focus on UI, JavaScript, and React.
          </p>
          <div className="box flex  justify-between  items-center bg-black my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide>
                {" "}
                <div className="">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">WordPress</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">MERN Stack </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Ecommence</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <div>
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">UI/UX Design</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
