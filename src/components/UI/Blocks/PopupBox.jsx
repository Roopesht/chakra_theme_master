// src/components/UI/Blocks/PopupBox.jsx
import React from "react";
import { 
  Box, Button, Text, Flex, VStack, useTheme, useColorMode 
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function PopupBox({ 
  variant = "highlight",
  title = "Notification",
  message = "This is a popup notification example.",
  primaryAction = { text: "Take Action", onClick: () => {} },
  secondaryAction = { text: "Dismiss", onClick: () => {} },
  children,
  showAccentBar = true
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const v = theme.colors.variants[variant];
  const bg = v?.[colorMode];
  const text = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];
  const accent = theme.colors.brand[500];
  const border = colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.100";

  return (
    <MotionBox
      role="alert"
      bg={bg}
      color={text}
      borderRadius="md"
      borderWidth="1px"
      borderColor={border}
      boxShadow={
        colorMode === "dark"
          ? "0 4px 12px rgba(0,0,0,0.5)"
          : "0 4px 10px rgba(0,0,0,0.08)"
      }
      p={4}
      position="relative"
      overflow="hidden"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Accent bar */}
      {showAccentBar && (
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="4px"
          bg={accent}
          borderTopRadius="md"
        />
      )}

      <Flex direction="column" gap={3} mt={showAccentBar ? 2 : 0}>
        <Text fontWeight="semibold">{title}</Text>
        <Text fontSize="sm" opacity={0.9}>
          {message}
        </Text>
        
        {children && (
          <VStack align="stretch" spacing={2}>
            {children}
          </VStack>
        )}

        <Flex gap={3} mt={2}>
          <Button 
            variant="important" 
            size="sm"
            onClick={primaryAction.onClick}
          >
            {primaryAction.text}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.text}
          </Button>
        </Flex>
      </Flex>
    </MotionBox>
  );
}