import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  VStack,
} from '@chakra-ui/react';
import { IoIosAnalytics, IoLogoBitcoin, IoIosSearch } from 'react-icons/io';
import React, { ReactElement } from 'react';
import UiBuildingImage from '../../images/ui changes in real time.gif';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function BuildUiRealTime() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={UiBuildingImage}
          objectFit={'cover'}
        />
      </Flex>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Builds UI in real-time
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Sidekik monitor's your smart contract ABI and updates itself in
          real-time as you are typing in code.
        </Text>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Type in a function in your smart contract and it shows up in the UI
          for you to interact with. Change the function param type from uint
          to an array, and the UI also updates to accept an array.
        </Text>
      </VStack>
    </SimpleGrid>
  );
}
