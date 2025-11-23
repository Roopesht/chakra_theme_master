import React, { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import WebinarHero from "./WebinarHero";

export default function Showcase() {
  const [themeName, setThemeName] = useState("forest");

  return (
    <>
    <Header />

      <WebinarHero></WebinarHero>
    </>
  );
}
