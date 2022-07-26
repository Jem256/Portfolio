/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./styles.css";
import { HiBriefcase } from "react-icons/hi";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5, AiOutlineCloudDownload } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import me from "../assets/Me.png";
import CV from "../assets/NAGASHA-CV.pdf";

function Home() {
  return (
    <div>
      <header className="h-screen flex flex-col items-center justify-left w-4/5 m-auto">
        <h2 className="intro-tagline">
          Hello, I'm
          {" "}
          <span className="font-bold">Jemimah Nagasha</span>
          , a web
          developer based in Kampala, Uganda. I love building beautiful
          interfaces, web apps, and everything in between!
        </h2>
        {/* <h1 className="text-4xl items-center">
          Hello I am Jemimah Nagasha, a web developer
          <br />
          based in Kampala, Uganda. I love
          <br />
          building beautiful interfaces, web applications
          <br />
          and everything in between ☺
        </h1> */}
        <div className="btn btn-primary flex items-center flex-row gap-2">
          <AiOutlineCloudDownload className="text-3xl" />
          <a href={CV} download className="">
            Resume
          </a>
        </div>
      </header>

      <section className="flex flex-col items-center justify-content">
        <div className="flex items-center gap-2 mb-6 text-3xl text-slate-500">
          <HiBriefcase />
          <h2>Technical Skills</h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <GrReactjs className="text-5xl" />
            <span>ReactJs</span>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandJavascript className="text-5xl" />
            <span>Javascript</span>
          </div>
          <div className="flex flex-col items-center">
            <AiFillHtml5 className="text-5xl" />
            <span>HTML5</span>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoCss3 className="text-5xl" />
            <span>CSS3</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl" />
            <span>tailwindcss</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-content">
        <div className="flex items-center gap-2 mb-6 text-3xl text-slate-500">
          <HiBriefcase />
          <h2>Work History</h2>
        </div>
        <div>
          <h3>Frontend Developer Intern</h3>
          <h5>Oluadepe Farms Nig. Ltd</h5>
          <p className="text-slate-500">
            E-commerce website using ReactJs, CSS, and HTML5 for all frontend
            <br />
            features and navigation Redux for state management and integrated
            <br />
            flutterwave payments for checkout The process of making orders was
            <br />
            eased for customers which increased sales by 50% The business
            <br />
            online presence improved marketing and extended the reach of the
            <br />
            business.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
