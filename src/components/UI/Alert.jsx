import React from "react";
import { Alert as ChakraAlert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionAlert = motion(ChakraAlert);

export function Alert({ title, description, ...props }) {
  return (
    <MotionAlert
      status={props.variant || "info"}
      borderRadius="md"
      p={3}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      <AlertIcon />
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
      {!title && !description && props.children}
    </MotionAlert>
  );
}
