import React from "react";
import { Flex, Select, Spacer, IconButton, useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { UIProvider, useBrandTheme } from "../UI/UIProvider";

export default function Header({ onShowCustom, showBackButton, onShowMain }) {
  const { themeName, setThemeName } = useBrandTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mb={4} align="center" gap={4}>
      <Select
        w="200px"
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
      >
        <option value="forest">Forest</option>
        <option value="sunrise">Sunrise</option>
        <option value="aurora">Aurora</option>
      </Select>

      <Spacer />

      {showBackButton ? (
        <Button onClick={onShowMain} size="sm">
          ← Back to Main
        </Button>
      ) : (
        <Button onClick={onShowCustom} size="sm">
          Custom Showcase
        </Button>
      )}

      <IconButton
        size="sm"
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}