import React, { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import WebinarHero from "../components/samples/WebinarHero";

export default function Test1() {
  const [themeName, setThemeName] = useState("forest");

  return (
    <Container maxW="6xl">
      <Header themeName={themeName} setThemeName={setThemeName} />
      <Box>
        <WebinarHero></WebinarHero>
        
      </Box>
    </Container>
  );
}
