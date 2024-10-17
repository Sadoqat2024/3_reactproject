import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "./button";

const ProductCard = (props) => {
  return (
    <div className="w-ful lg:w-1/4 bg-white p-3 rounded-lg">
      <img className="rounded-lg w-64 h-[240px]" src={props.img} alt="img" />
      <div className="flex flex-col items-center mt-5 gap-3">
        <h2 className="font-semibold text-xl">{props.title}</h2>
        <div className="flex ">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <h3 className="font-semibold text-lg ">$15.99</h3>
        <Button title="ADD TO CARD" />
      </div>
    </div>
  );
};

export default ProductCard;
