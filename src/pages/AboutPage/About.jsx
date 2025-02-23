import React from "react";
import neon from "./images/Neon.jpg";
import Title from "../../components/Title/Title";
export default function About() {
  return (
    <div className="relative max-w-[600px]">
      <div className="flex p-5 shadow-[0_0_0_5px_rgb(71,111,111)] m-4">
        <div className="flex flex-col max-w-[60%]">
          <img src={neon} alt="neon" />
          <Title />
        </div>
      </div>
    </div>
  );
}
