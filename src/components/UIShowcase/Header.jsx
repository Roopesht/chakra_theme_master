import React from "react";
import { Flex, Select, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { UIProvider, useBrandTheme } from "../UI/UIProvider";


export default function Header() {
  const { themeName, setThemeName } = useBrandTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mb={4} align="center">
      <Select
        w="200px"
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
      >
        <option value="forest">Forest</option>
        <option value="sunrise">Sunrise</option>
      </Select>

      <Spacer />

      <IconButton
        size="sm"
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
