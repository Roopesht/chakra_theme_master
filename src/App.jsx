import React from "react";
import { Box } from "@chakra-ui/react";
import ThemePlayground from "./pages/ThemePlayground";

function App() {
  return (
    <Box bg="bg.canvas" minH="100vh" p={4}>
      <ThemePlayground />
    </Box>
  );
}

export default App;
