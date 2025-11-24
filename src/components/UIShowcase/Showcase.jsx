import React, { useState } from "react";
import { Box, Container, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Header from "./Header";
import WebinarHero from "./custom/WebinarHero";
import UIShowcase from "./UIShowcase";

export default function Showcase() {
  const [themeName, setThemeName] = useState("forest");

  return (
    <>
      <Header />
      <Container maxW="container.xl" py={4}>
        <Tabs variant="enclosed" colorScheme="blue">
          <TabList>
            <Tab fontWeight="semibold">UI Showcase</Tab>
            <Tab fontWeight="semibold">Webinar Page</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <UIShowcase />
            </TabPanel>
            <TabPanel px={0}>
              <WebinarHero />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}