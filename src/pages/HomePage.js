import React from "react";

import Hero from "../components/Hero";
import Fixed from "../components/Fixed";
import Market from "../components/Market";

import Below from "../components/Below";
import Bottom from "../components/Bottom";
import Random from "../components/Random";
import Buttons from "../components/Buttons";

import Wanna from "../components/Wanna";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Market />
      <Fixed />
      <Random />
      <br />
      <Below />
      <Buttons />

      <Wanna />
      <Bottom />
    </>
  );
}
