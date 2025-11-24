import { extendTheme } from "@chakra-ui/react";
import typography from "./typography";
import { forestTheme, sunriseTheme, auroraTheme } from "./themeVariants";
import { generateComponentVariants } from "./utils/generateComponentVariants";
import * as componentStyles from "./components";

const themeName = "aurora";
const dictThemes = { forest: forestTheme, sunrise: sunriseTheme, aurora: auroraTheme };
const selected = dictThemes[themeName] || auroraTheme;

const components = Object.fromEntries(
  Object.entries(componentStyles).map(([name, config]) => [
    name,
    { ...config, variants: generateComponentVariants(selected) },
  ])
);

const theme = extendTheme({
  colors: { ...selected.colors, bg: selected.bg || {} },
  components,
  textStyles: typography.textStyles,
});

export default theme;
