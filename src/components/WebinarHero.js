import React from 'react';
import {
  Container,
  Heading,
  HStack,
  VStack,
  Avatar,

} from '@chakra-ui/react';
import {Text} from './UI/Text';
import {Badge} from './UI/Badge';
import {Box} from './UI/Box';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const WebinarHero = () => {
  const nextWebinarDate = "2008-01-01";

  // Safety check
  

  return (
    <Box variant="highlight"
      py={{ base: 16, md: 24 }}
    >
      <Container maxW="container.xl">
        <MotionBox
          textAlign="center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant='success'
            
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
            mb={6}
          >
            Free webinar
          </Badge>

          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontFamily="heading"
            mb={6}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Free GenAI Career Webinar
          </MotionHeading>
          
          <MotionText
            fontSize={{ base: 'xl', md: '2xl' }}
            mb={8}
            maxW="3xl"
            mx="auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover how to break into AI — even with zero experience.
          </MotionText>

          <HStack
            justify="center"
            spacing={6}
            mb={10}
            flexWrap="wrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <HStack>
             
              <Text fontSize="lg"  > Its on {nextWebinarDate} </Text>
            </HStack>
            <HStack>
            
              <Text fontSize="lg"  variant='highlight'>45-60 Minutes</Text>
            </HStack>
          </HStack>

          <MotionBox
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <VStack spacing={3}>
              <Avatar
                size="xl"
                name="Roopesh"
              />
              <VStack spacing={1}>
                <Text fontWeight="600" fontSize="lg" >
                  Venkat
                </Text>
                <Text fontSize="sm">
                  ML Ops
                </Text>
              </VStack>
            </VStack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default WebinarHero;