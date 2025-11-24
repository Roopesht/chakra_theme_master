// src/components/UI/Blocks/FormSection.jsx
import React from "react";
import {
  Box,
  VStack,
  useTheme,
  useColorMode,
  Divider,
  Heading,
  Button
} from "@chakra-ui/react";

export default function FormSection({ 
  variant = "muted",
  title = "Form Section",
  children,
  onSubmit,
  submitText = "Submit",
  showSubmitButton = true
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const accent = theme.colors.brand[500];
  const v = theme.colors.variants[variant];
  const bg = v?.[colorMode];
  const text = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];
  const border = colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100";

  return (
    <Box
      p={6}
      borderRadius="md"
      bg={bg}
      color={text}
      borderWidth="1px"
      borderColor={border}
      boxShadow={
        colorMode === "dark" ? "0 2px 10px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.08)"
      }
      _hover={{ transform: "scale(1.01)" }}
      transition="all 0.15s ease"
    >
      <VStack 
        as={onSubmit ? "form" : "div"} 
        onSubmit={onSubmit}
        align="stretch" 
        spacing={4}
      >
        <Heading size="sm" color={accent}>
          {title}
        </Heading>
        <Divider />
        
        {children}
        
        {showSubmitButton && (
          <Button 
            variant="accent" 
            alignSelf="flex-start" 
            type={onSubmit ? "submit" : "button"}
          >
            {submitText}
          </Button>
        )}
      </VStack>
    </Box>
  );
}