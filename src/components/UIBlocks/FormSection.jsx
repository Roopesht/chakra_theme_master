import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function FormSection() {
  return (
    <Box p={4} borderRadius="md" bg="bg.surface">
      <FormControl mb={3}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter name" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Email</FormLabel>
        <Input placeholder="name@company.com" />
      </FormControl>
      <Button>Submit</Button>
    </Box>
  );
}
