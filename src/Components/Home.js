import React from "react";
import Carousel from "./Carousel";
import CakeDetails from "./CakeDetails";
import CakeList from "./CakeList";
import Cake from "./Cake";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CakeList />
      <CakeDetails />
      <Cake />
    </div>
  );
}
