import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Navigation from "../components/Navigation";
import Code from "../components/Code";
import Hero from "../components/Hero";
import Fixed from "../components/Fixed";
import Market from "../components/Market";
import HeroTest from "../components/HeroTest";
import Below from "../components/Below";
import Bottom from "../components/Bottom";
import Random from "../components/Random";
import Buttons from "../components/Buttons";
import Contact from "../components/Contact";
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
