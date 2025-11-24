import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion.div;

export default function MotionWrapper({ 
  children, 
  duration = 0.5, 
  ease = "backIn" 
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, ease }}
      style={{ width: "100%" }}
    >
      {children}
    </MotionBox>
  );
}