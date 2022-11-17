import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/images/banner.png";
import certificateIcon from "../assets/images/certificate.png";
import mentorIcon from "../assets/images/mentor.png";
import priceIcon from "../assets/images/price.png";
import qualityIcon from "../assets/images/quality.png";

const Content = () => {
  return (
    <main className="w-full min-h-[60vh]">
      <div className="w-[96%] sm:w-[80%] m-auto p-5 flex flex-col-reverse gap-5 lg:flex-row lg:gap-0 items-center justify-between">
        <div className="flex flex-col gap-10 w-[full] justify-center 2xl:w-[40%]">
          <div className="flex items-center gap-1 justify-center lg:justify-start">
            <img src={certificateIcon} alt="" className="h-[2em]" />
            <p className="text-lg font-bold tracking-wide uppercase h-[2em]">
              guaranteed and certified
            </p>
          </div>

          <h1 className="text-4xl text-center lg:text-left lg:text-6xl font-bold tracking-wide">
            Online learning wherever and whenever
          </h1>
          <p className="text-center lg:text-left text-lg font-semibold">
            The umbrella academy will make your learning more qualityfull with
            the presence of experienced and professional mentors
          </p>
          <Link to="/courses">
            <button className="mx-auto lg:mx-0 btn btn-accent w-[10em]">
              Get Started
            </button>
          </Link>
          <div className="mx-auto lg:mx-0 text-sm font-semibold flex items-center gap-5">
            <div className="flex items-center gap-1">
              <img src={mentorIcon} alt="" className="w-[1.5em]" />
              <p>Experienced mentor</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={priceIcon} alt="" className="w-[1.5em]" />
              <p>Friendly price</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={qualityIcon} alt="" className="w-[1.5em]" />
              <p>Quality learning</p>
            </div>
          </div>
        </div>
        <div className="w-full 2xl:w-[40%]">
          <img src={bannerImg} alt="" className=" ml-auto" />
        </div>
      </div>
    </main>
  );
};

export default Content;
