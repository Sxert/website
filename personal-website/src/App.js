import React from "react";
import { useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!entered ? (
        <div
          className="w-full h-full flex items-center justify-center bg-black text-white text-2xl font-bold cursor-pointer"
          onClick={() => setEntered(true)}
        >
          Click on the Enter
        </div>
      ) : (
        <div className="w-full h-full relative">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
          >
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Profile Card */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full text-white text-center shadow-xl">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto border-2 border-white mb-4"
              />
              <h1 className="text-xl font-bold">Senin Adın</h1>
              <p className="text-sm mb-4">Full-stack Developer</p>
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" aria-label="Instagram">
                  <img src="/instagram-icon.svg" className="w-6 h-6" />
                </a>
                <a href="#" aria-label="GitHub">
                  <img src="/github-icon.svg" className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Discord">
                  <img src="/discord-icon.svg" className="w-6 h-6" />
                </a>
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla
                tempore ut?
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
