import React from "react";
import Button from "../layouts/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/premium-photo/creat-image-use-promote-coffe-image-shouldgenerative-ai_760510-5056.jpg"
            alt="about"
          />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h1 className="font-semibold text-3xl">
            What makes our coffee Special?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            velit, aspernatur laboriosam quam atque vero recusandae laborum ut
            dicta aliquam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at
            eveniet recusandae quidem quisquam atque quam aut incidunt esse.
            Corporis amet consequatur magnam quaerat.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
