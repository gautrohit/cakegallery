import React from "react";
import Carousel from "./Carousel";
import CakeDetails from "./CakeDetails";
import CakeList from "./CakeList";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CakeList />
      <CakeDetails />
    </div>
  );
}
