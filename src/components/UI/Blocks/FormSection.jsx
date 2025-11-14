import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useTheme,
  useColorMode,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function FormSection({ variant = "muted" }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const v = theme.colors.variants[variant];
  const bg = v?.[colorMode];
  const text = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];
  const accent = theme.colors.brand[500];
  const border = colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100";

  return (
    <MotionBox
      p={6}
      borderRadius="md"
      bg={bg}
      color={text}
      borderWidth="1px"
      borderColor={border}
      boxShadow={
        colorMode === "dark" ? "0 2px 10px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.08)"
      }
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    >
      <VStack align="stretch" spacing={4}>
        <Heading size="sm" color={accent}>
          Contact Details
        </Heading>
        <Divider />
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="name@company.com" />
        </FormControl>
        <Button variant="accent" alignSelf="flex-start">
          Submit
        </Button>
      </VStack>
    </MotionBox>
  );
}
