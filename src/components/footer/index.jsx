import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Portfolio Projects</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Cv Resume</p>
          <a
            className="text-white text-base text-center mx-2 cursor-pointer"
            href="./assets/CV_MANUEL_DURAN.pdf"
            download
          >
            Download Resume
          </a>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Blog</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Contact</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="text-white text-sm text-center">Contact to me</p>
        <a
          href="mailto:manuel@durbonca.com?subject=Hi!%20I%20just%20saw%20your%20portfolio%20webpage%20and%20I%20would%20love%20to%20contact%20you%20from%20..."
          className="text-white text-sm text-center"
          target="_blank"
          rel="noreferrer"
        >
          manuel@durbonca.com
        </a>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between">
        <p className="text-white text-sm text-center">@durbonca {new Date().getFullYear()}</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
