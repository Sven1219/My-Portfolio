import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import img4 from "../assets/images/project-img4.png";
import img5 from "../assets/images/project-img5.jpg";
import img6 from "../assets/images/project-img6.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "TRAVEL The World",
      description: "Landing Page & WordPress",
      img: img1,
    },
    {
      id: 2,
      title: "Let's do it together",
      description: "Landing Page & WordPress",
      img: img2,
    },
    {
      id: 3,
      title: "Boost your Startup",
      description: "Landing Page & WordPress",
      img: img3,
    },
    {
      id: 4,
      title: "FiveHere",
      description: "WordPress & Shopify",
      img: img4,
    },
    {
      id: 5,
      title: "WhatMoney",
      description: "WordPress & UI/UX Design",
      img: img5,
    },
    {
      id: 6,
      title: "ICDEE",
      description: "WordPress & UI/UX Design",
      img: img6,
    },
  ];

  return (
    <>
      <div className="projects bg-black text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        I am a passionate web developer and designer with a results driven mindset. Among my priorities when working on any project is to implement effective frameworks that make your website stand out from the competition. Converting visitors into potential clients is my mantra.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2 border-black rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            WordPress
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2 border-black rounded-[6px] p-[4px]  ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            MERN
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2 border-black rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Ecommence
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
