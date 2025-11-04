#!/bin/bash
# setup-theme-showcase-full.sh
# Run in an empty folder. After this:
#   npm install
#   npm start

set -e

# --- package.json ---
cat > package.json <<'EOF'
{
  "name": "theme-showcase",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.0.17",
    "@chakra-ui/react": "^2.7.1",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "framer-motion": "^10.12.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "engines": {
    "node": ">=16"
  }
}
EOF

# --- public ---
mkdir -p public
cat > public/index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Theme Showcase</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
EOF

# --- src structure ---
mkdir -p src/{theme/{components,utils},components/UIBlocks,pages,utils}
mkdir -p src/components

# ---------- src/index.js ----------
cat > src/index.js <<'EOF'
import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
EOF

# ---------- src/App.jsx ----------
cat > src/App.jsx <<'EOF'
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
EOF

# ---------- src/theme/index.js ----------
cat > src/theme/index.js <<'EOF'
import { extendTheme } from "@chakra-ui/react";
import typography from "./typography";
import { forestTheme, sunriseTheme } from "./themeVariants";
import { generateComponentVariants } from "./utils/generateComponentVariants";
import * as componentStyles from "./components";

const defaultTheme = "forest";
const selected = defaultTheme === "sunrise" ? sunriseTheme : forestTheme;

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
EOF

# ---------- src/theme/typography.js ----------
cat > src/theme/typography.js <<'EOF'
const typography = {
  textStyles: {
    heading: { fontSize: "2xl", fontWeight: "700" },
    body: { fontSize: "md" },
    caption: { fontSize: "sm", color: "gray.500" },
    muted: { color: "gray.400" },
  },
};
export default typography;
EOF

# ---------- src/theme/themeVariants.js ----------
cat > src/theme/themeVariants.js <<'EOF'
export const forestTheme = {
  colors: {
    brand: { 500: "#2f855a", 600: "#276749" },
    variants: {
      accent: { light: "#68D391", dark: "#22543D" },
      important: { light: "#48BB78", dark: "#2F855A" },
      success: { light: "#38A169", dark: "#276749" },
      neutral: { light: "#F7FAFC", dark: "#1A202C" },
      outline: { light: "#CBD5E0", dark: "#4A5568" },
      warning: { light: "#F6AD55", dark: "#C05621" },
      info: { light: "#63B3ED", dark: "#2B6CB0" },
      danger: { light: "#FC8181", dark: "#742A2A" },
      muted: { light: "#EDF2F7", dark: "#2D3748" },
      highlight: { light: "#B2F5EA", dark: "#234E52" }
    }
  },
  bg: { canvas: "gray.50", surface: "white" }
};

export const sunriseTheme = {
  colors: {
    brand: { 500: "#DD6B20", 600: "#C05621" },
    variants: {
      accent: { light: "#F6E05E", dark: "#744210" },
      important: { light: "#ED8936", dark: "#C05621" },
      success: { light: "#68D391", dark: "#276749" },
      neutral: { light: "#FAF5FF", dark: "#322659" },
      outline: { light: "#E2E8F0", dark: "#4A5568" },
      warning: { light: "#FBD38D", dark: "#B7791F" },
      info: { light: "#90CDF4", dark: "#2A4365" },
      danger: { light: "#FEB2B2", dark: "#742A2A" },
      muted: { light: "#F7FAFC", dark: "#1A202C" },
      highlight: { light: "#FAF089", dark: "#744210" }
    }
  },
  bg: { canvas: "gray.50", surface: "white" }
};
EOF

# ---------- src/theme/utils/generateComponentVariants.js ----------
cat > src/theme/utils/generateComponentVariants.js <<'EOF'
export const generateComponentVariants = (theme) => {
  const { variants } = theme.colors;
  const result = {};
  Object.keys(variants).forEach((v) => {
    result[v] = (props) => {
      const mode = props.colorMode === "dark" ? "dark" : "light";
      const bg = variants[v][mode];
      const color = mode === "dark" ? "white" : "black";
      return {
        bg,
        color,
        _hover: { opacity: 0.9, transform: "translateY(-1px)" },
      };
    };
  });
  return result;
};
EOF

# ---------- theme components ----------
cat > src/theme/components/Button.js <<'EOF'
export const Button = {
  baseStyle: { borderRadius: "md", fontWeight: "semibold", transition: "all 0.18s" },
  defaultProps: { variant: "accent" }
};
EOF

cat > src/theme/components/Card.js <<'EOF'
export const Card = {
  baseStyle: { p: 4, borderRadius: "lg", boxShadow: "sm", bg: "bg.surface" },
  defaultProps: { variant: "neutral" }
};
EOF

cat > src/theme/components/Input.js <<'EOF'
export const Input = {
  baseStyle: { borderRadius: "md" },
  defaultProps: { variant: "outline" }
};
EOF

cat > src/theme/components/Alert.js <<'EOF'
export const Alert = {
  baseStyle: { borderRadius: "md", fontWeight: "medium" },
  defaultProps: { variant: "info" }
};
EOF

cat > src/theme/components/Switch.js <<'EOF'
export const Switch = {
  baseStyle: { track: { bg: "gray.300" }, thumb: { bg: "white" } }
};
EOF

cat > src/theme/components/index.js <<'EOF'
export * from "./Button";
export * from "./Card";
export * from "./Input";
export * from "./Alert";
export * from "./Switch";
EOF

# ---------- components/Header.jsx ----------
cat > src/components/Header.jsx <<'EOF'
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
EOF

# ---------- components/MotionWrapper.jsx ----------
cat > src/components/MotionWrapper.jsx <<'EOF'
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion.div;

export default function MotionWrapper({ children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{ width: "100%" }}
    >
      {children}
    </MotionBox>
  );
}
EOF

# ---------- components/CodeCopyBox.jsx ----------
cat > src/components/CodeCopyBox.jsx <<'EOF'
import React from "react";
import { Button, useClipboard, Box, Text } from "@chakra-ui/react";

export default function CodeCopyBox({ code }) {
  const { onCopy, hasCopied } = useClipboard(code || "");
  return (
    <Box mt={2}>
      <Button size="sm" onClick={onCopy}>
        {hasCopied ? "Copied!" : "Copy Code"}
      </Button>
      <Text fontSize="xs" mt={1} color="gray.500">{(code || "").slice(0, 80)}...</Text>
    </Box>
  );
}
EOF

# ---------- components/UIBlocks/ConfirmationBox.jsx ----------
cat > src/components/UIBlocks/ConfirmationBox.jsx <<'EOF'
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function ConfirmationBox() {
  return (
    <Box p={4} borderRadius="md" bg="bg.surface">
      <Text mb={3}>Are you sure you want to delete this item?</Text>
      <Button colorScheme="red" mr={2}>Delete</Button>
      <Button variant="outline">Cancel</Button>
    </Box>
  );
}
EOF

# ---------- components/UIBlocks/DashboardCards.jsx ----------
cat > src/components/UIBlocks/DashboardCards.jsx <<'EOF'
import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

export default function DashboardCards() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
      {[1,2,3].map((i)=>(
        <Box key={i} p={4} borderRadius="md" bg="bg.surface" boxShadow="sm">
          <Heading size="sm">Metric {i}</Heading>
          <Text mt={2} fontSize="sm">Some quick stat</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
EOF

# ---------- components/UIBlocks/FormSection.jsx ----------
cat > src/components/UIBlocks/FormSection.jsx <<'EOF'
import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function FormSection() {
  return (
    <Box p={4} borderRadius="md" bg="bg.surface">
      <FormControl mb={3}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter name" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Email</FormLabel>
        <Input placeholder="name@company.com" />
      </FormControl>
      <Button>Submit</Button>
    </Box>
  );
}
EOF

# ---------- components/UIBlocks/PopupBox.jsx ----------
cat > src/components/UIBlocks/PopupBox.jsx <<'EOF'
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function PopupBox() {
  return (
    <Box p={4} borderRadius="md" bg="bg.surface">
      <Text mb={2}>This is a small popup notification.</Text>
      <Button size="sm">Action</Button>
    </Box>
  );
}
EOF

cat > src/components/UIBlocks/index.js <<'EOF'
export { default as ConfirmationBox } from "./ConfirmationBox";
export { default as DashboardCards } from "./DashboardCards";
export { default as FormSection } from "./FormSection";
export { default as PopupBox } from "./PopupBox";
EOF

# ---------- utils/componentRegistry.js ----------
cat > src/utils/componentRegistry.js <<'EOF'
export const componentsToShow = [
  "Button",
  "Alert",
  "Input",
  "Switch",
  "ConfirmationBox",
  "DashboardCards",
  "FormSection",
  "PopupBox"
];
EOF

# ---------- components/UIShowcase.jsx ----------
cat > src/components/UIShowcase.jsx <<'EOF'
import React from "react";
import { VStack, Heading, Divider } from "@chakra-ui/react";
import MotionWrapper from "./MotionWrapper";
import CodeCopyBox from "./CodeCopyBox";
import * as UIBlocks from "./UIBlocks";
import * as Chakra from "@chakra-ui/react";
import { componentsToShow } from "../utils/componentRegistry";

export default function UIShowcase() {
  return (
    <VStack align="stretch" spacing={6}>
      {componentsToShow.map((name) => {
        const Comp = Chakra[name] || UIBlocks[name];
        if (!Comp) return null;
        const code = `<${name} />`;
        return (
          <MotionWrapper key={name}>
            <Heading size="md">{name}</Heading>
            <Comp />
            <CodeCopyBox code={code} />
            <Divider />
          </MotionWrapper>
        );
      })}
    </VStack>
  );
}
EOF

# ---------- pages/ThemePlayground.jsx ----------
cat > src/pages/ThemePlayground.jsx <<'EOF'
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
EOF

# ---------- .gitignore ----------
cat > .gitignore <<'EOF'
node_modules
dist
build
.env
.DS_Store
EOF

# Final message
echo ""
echo "✅ Project scaffold created."
echo "Next steps:"
echo "  1) Run: npm install"
echo "  2) Run: npm start"
echo ""
echo "Notes:"
echo " - Default theme in src/theme/index.js is set to 'forest'. Change 'defaultTheme' to 'sunrise' if you want."
echo " - To add a new theme: edit src/theme/themeVariants.js and update theme selection in src/theme/index.js"
echo " - Add components to the registry in src/utils/componentRegistry.js"
echo ""
