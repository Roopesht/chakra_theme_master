import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

export default function DashboardCards() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
      {[1,2,3].map((i)=>(
        <Box key={i} p={4} borderRadius="md" bg="bg.surface" boxShadow="sm">
          <Heading size="sm">Metric {i}</Heading>
          <Text mt={2} fontSize="sm">Some quick stat</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
