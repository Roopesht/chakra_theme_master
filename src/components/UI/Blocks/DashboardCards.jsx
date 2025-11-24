// src/components/UI/Blocks/DashboardCards.jsx
import React from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function DashboardCards({ 
  variant = "neutral",
  metrics = [],
  columns = { base: 1, md: 3 }
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const v = theme.colors.variants[variant];
  const bg = v?.[colorMode];
  const text = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`];
  const border = colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100";
  const accent = theme.colors.brand[500];

  const defaultMetrics = [
    { title: "Metric 1", value: "1,234", description: "Quick summary" },
    { title: "Metric 2", value: "1,234", description: "Quick summary" },
    { title: "Metric 3", value: "1,234", description: "Quick summary" },
  ];

  const data = metrics.length > 0 ? metrics : defaultMetrics;

  return (
    <SimpleGrid columns={columns} spacing={4}>
      {data.map((metric, i) => (
        <MotionBox
          key={i}
          p={5}
          borderRadius="lg"
          bg={bg}
          color={text}
          borderWidth="1px"
          borderColor={border}
          boxShadow={
            colorMode === "dark" ? "0 2px 6px rgba(0,0,0,0.4)" : "0 2px 6px rgba(0,0,0,0.08)"
          }
          _before={{
            content: '""',
            display: "block",
            w: "4px",
            h: "100%",
            bg: accent,
            borderRadius: "md",
            position: "absolute",
            left: 0,
            top: 0,
          }}
          position="relative"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.15 }}
        >
          <Heading size="sm" mb={2}>
            {metric.title}
          </Heading>
          <Text fontSize="sm" opacity={0.85}>
            {metric.description}
          </Text>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}