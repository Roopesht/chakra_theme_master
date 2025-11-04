import React from "react";
import {
  VStack,
  Heading,
  Divider,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import MotionWrapper from "./MotionWrapper";
import CodeCopyBox from "./CodeCopyBox";
import * as UIBlocks from "./UIBlocks";
import * as Chakra from "@chakra-ui/react";
import { componentsToShow } from "../utils/componentRegistry";

// ✅ Import your custom variant-aware components
import { Input } from "./UI//Input";
import { Button } from "./UI//Button";
import { Switch } from "./UI/Switch";

// ✅ Extend here as you add more custom components (Textarea, Select, etc.)
const CUSTOM = {
  Input,
  Button,
};

// ✅ Define your semantic variants
const VARIANTS = [
  "accent",
  "important",
  "success",
  "neutral",
  "outline",
  "warning",
  "info",
  "danger",
  "muted",
  "highlight",
];

// ✅ Components that don’t accept children
const VOID_COMPONENTS = ["Input", "Switch", "Checkbox", "Radio"];

export default function UIShowcase() {
  return (
    <VStack align="stretch" spacing={8}>
      {componentsToShow.map((name) => {
        // Lookup order: Custom > Chakra > UIBlocks
        const Comp = CUSTOM[name] || Chakra[name] || UIBlocks[name];
        if (!Comp) return null;

        const supportsChildren = !VOID_COMPONENTS.includes(name);

        return (
          <MotionWrapper key={name}>
            <Heading size="md" mb={3}>
              {name}
            </Heading>

            {/* Render all variants dynamically */}
            <HStack wrap="wrap" spacing={3} flexWrap="wrap">
              {VARIANTS.map((variant) => (
                <Box key={variant} textAlign="center">
                  {supportsChildren ? (
                    <Comp variant={variant}>{variant}</Comp>
                  ) : (
                    <Comp variant={variant} placeholder={variant} />
                  )}
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    {variant}
                  </Text>
                </Box>
              ))}
            </HStack>

            <CodeCopyBox
              code={`<${name} variant="..." /> // variants: ${VARIANTS.join(", ")}`}
            />
            <Divider mt={4} />
          </MotionWrapper>
        );
      })}
    </VStack>
  );
}
