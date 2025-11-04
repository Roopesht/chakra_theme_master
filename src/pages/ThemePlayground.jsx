import React, { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import UIShowcase from "../components/UIShowcase";

export default function ThemePlayground() {
  const [themeName, setThemeName] = useState("forest");

  return (
    <Container maxW="6xl">
      <Header themeName={themeName} setThemeName={setThemeName} />
      <Box>
        <UIShowcase />
      </Box>
    </Container>
  );
}
