// src/components/UI/Blocks/Toast.jsx
import React from "react";
import { 
  Box, Text, CloseButton, useTheme, useColorMode 
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

export function Toast({ 
  id,
  message, 
  variant = "info",
  onClose,
  duration = 5000 
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  
  const v = theme.colors?.variants?.[variant] ?? theme.colors.variants.info;
  const bg = v?.[colorMode];
  const text = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <MotionBox
      p={3}
      pr={8}
      borderRadius="md"
      bg={bg}
      color={text}
      boxShadow="lg"
      position="relative"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <Text fontSize="sm">{message}</Text>
      <CloseButton
        size="sm"
        position="absolute"
        right={1}
        top={1}
        onClick={() => onClose(id)}
      />
    </MotionBox>
  );
}

// Toast Container
export function ToastContainer({ toasts, onClose }) {
  return (
    <Box
      position="fixed"
      top={4}
      right={4}
      zIndex={1400}
      maxW="400px"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={onClose}
          />
        ))}
      </AnimatePresence>
    </Box>
  );
}

// Hook for using toast
export function useToast() {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, options = {}) => {
    const id = Date.now().toString();
    const toast = { id, message, ...options };
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const toast = {
    info: (message, options) => addToast(message, { ...options, variant: 'info' }),
    success: (message, options) => addToast(message, { ...options, variant: 'success' }),
    warning: (message, options) => addToast(message, { ...options, variant: 'warning' }),
    error: (message, options) => addToast(message, { ...options, variant: 'danger' }),
  };

  return { toasts, toast, removeToast };
}