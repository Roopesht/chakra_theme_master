import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { UIProvider, useBrandTheme } from "./components/UI/UIProvider";
import Showcase from "./components/UIShowcase/Showcase";



export default function App() {

  return (
    <UIProvider>
      <VStack p={6} spacing={6}>
        <Showcase />
      </VStack>
    </UIProvider>
  );
}
