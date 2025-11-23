import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { UIProvider, useBrandTheme } from "./components/UI/UIProvider";
import ThemePlayground from "./pages/ThemePlayground";
import Showcase from "./components/UIShowcase/Showcase";


function ThemeToggle() {
  const { themeName, setThemeName } = useBrandTheme();

  return (
    <Button
      variant="outline"
      onClick={() =>
        setThemeName(themeName === "forest" ? "sunrise" : "forest")
      }
    >
      Switch to {themeName === "forest" ? "Sunrise" : "Forest"}
    </Button>
  );
}

export default function App() {

  return (
    <UIProvider>
      <VStack p={6} spacing={6}>
        <ThemeToggle />
        <Showcase />
        {/*
        <ThemePlayground />
        */}
      </VStack>
    </UIProvider>
  );
}
