import React from "react";
import { Flex, Select, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Header({ themeName, setThemeName }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mb={4} align="center">
      <Select w="200px" value={themeName} onChange={(e) => setThemeName(e.target.value)}>
        <option value="forest">Forest</option>
        <option value="sunrise">Sunrise</option> 
      </Select>
      <Spacer />
      <IconButton
        size="sm"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
      />
    </Flex>
  );
}
