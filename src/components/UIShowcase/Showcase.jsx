import React, { useState } from "react";
import { Box, Container, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Header from "./Header";
import UIShowcase from "./UIShowcase";
import CustomShowcase from "./custom/CustomShowcase";

export default function Showcase() {
  const [themeName, setThemeName] = useState("aurora");
  const [currentView, setCurrentView] = useState("main"); // "main" or "custom"

  const handleShowCustom = () => setCurrentView("custom");
  const handleShowMain = () => setCurrentView("main");

  return (
    <>
      <Header 
        onShowCustom={handleShowCustom}
        onShowMain={handleShowMain}
        showBackButton={currentView === "custom"}
      />
      
      <Container maxW="container.xl" py={4}>
        {currentView === "custom" ? (
          <CustomShowcase />
        ) : (
          <Tabs variant="enclosed" colorScheme="blue">
            <TabList>
              <Tab fontWeight="semibold">UI Showcase</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <UIShowcase />
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </Container>
    </>
  );
}