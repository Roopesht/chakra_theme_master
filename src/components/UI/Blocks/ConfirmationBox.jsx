// src/components/UI/Blocks/ConfirmationBox.jsx
import React from "react";
import { 
  Box, Button, Text, VStack, useTheme, useColorMode 
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function ConfirmationBox({ 
  variant = "neutral",
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const v = theme.colors?.variants?.[variant] ?? theme.colors.variants.neutral;
  const bg = v[colorMode];
  const text = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];

  return (
    <MotionBox
      p={4}
      borderRadius="md"
      bg={bg}
      color={text}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <VStack align="stretch" spacing={3}>
        <Text fontWeight="semibold">{title}</Text>
        <Text fontSize="sm" opacity={0.8}>{message}</Text>
        
        <Box pt={2}>
          <Button 
            variant="danger" 
            mr={2}
            onClick={onConfirm}
            isLoading={isLoading}
            size="sm"
          >
            {confirmText}
          </Button>
          <Button 
            variant="outline" 
            onClick={onCancel}
            size="sm"
          >
            {cancelText}
          </Button>
        </Box>
      </VStack>
    </MotionBox>
  );
}