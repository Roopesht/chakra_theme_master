import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { UIProvider, useBrandTheme } from "./components/UIProvider";
import ThemePlayground from "./pages/ThemePlayground";
//import {UIProvider} from "@/components/UIProvider";

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
        <ThemePlayground />
      </VStack>
    </UIProvider>
  );
}
