import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export function Card({ children, ...props }) {
  return (
    <MotionBox
      p={4}
      borderRadius="lg"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
