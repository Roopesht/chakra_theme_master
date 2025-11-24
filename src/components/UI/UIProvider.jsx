import React, { useState, useMemo, createContext, useContext } from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { forestTheme, sunriseTheme, auroraTheme } from "../../theme/themeVariants";
import { generateComponentVariants } from "../../theme/utils/generateComponentVariants";
import * as componentStyles from "../../theme/components";
import typography from "../../theme/typography";

// Context to hold current brand theme name
const BrandThemeContext = createContext();

export function useBrandTheme() {
  return useContext(BrandThemeContext);
}

export function UIProvider({ children, initialTheme = "forest" }) {
  const [themeName, setThemeName] = useState(initialTheme);

  const themeObject = useMemo(() => {
    const dictThemes = { forest: forestTheme, sunrise: sunriseTheme, aurora: auroraTheme };
    const selected = dictThemes[themeName] || auroraTheme;

    const components = Object.fromEntries(
      Object.entries(componentStyles).map(([name, config]) => [
        name,
        {
          ...config,
          variants: {
            ...(config.variants || {}),
            ...generateComponentVariants(selected),
          },
        },
      ])
    );

    return extendTheme({
      colors: { ...selected.colors },
      components,
      textStyles: typography.textStyles,
      config: { initialColorMode: "light", useSystemColorMode: false },
    });
  }, [themeName]);

  return (
    <BrandThemeContext.Provider value={{ themeName, setThemeName }}>
      <ChakraProvider theme={themeObject}>
        <ColorModeScript
          initialColorMode={themeObject.config.initialColorMode}
        />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </ChakraProvider>
    </BrandThemeContext.Provider>
  );
}
