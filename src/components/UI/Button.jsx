import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(ChakraButton);

export function Button(props) {
  return (
    <MotionButton
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      {...props}
    />
  );
}
