import React from "react";
import {
  VStack,
  Heading,
  Divider,
  HStack,
  Box,
  Text as Text1
} from "@chakra-ui/react";
import MotionWrapper from "../UI/MotionWrapper";
import CodeCopyBox from "./CodeCopyBox";
import * as Blocks from "../UI/Blocks";
import * as UI from "../UI";
import * as Chakra from "@chakra-ui/react";

// ✅ Import your custom variant-aware components
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { Switch } from "../UI/Switch";
import { Checkbox } from "../UI/Checkbox";
import { Radio } from "../UI/Radio";
import { Text } from "../UI/Text";
import { TextBG } from "../UI/TextBG";

/**/

const componentsToShow = [
  "Text",
  "TextBG",
  "Checkbox",
  "Radio",
  "Button",
  "Alert",
  "Input",
  "Switch",
  "ConfirmationBox",
  "DashboardCards",
  "FormSection",
  "PopupBox",
  "Box",
];

// ✅ Extend here as you add more custom components (Textarea, Select, etc.)
const CUSTOM = {
  Input,
  Button,
  Text,
  TextBG,
  Radio,
  Checkbox
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
        const Comp = CUSTOM[name] || Chakra[name] || Blocks[name];
        if (!Comp) return null;

        const supportsChildren = !VOID_COMPONENTS.includes(name);

        return (
          <MotionWrapper key={name} >
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
                  <Text1 fontSize="xs" color="gray.500" mt={1}>
                    {variant}
                  </Text1>
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
