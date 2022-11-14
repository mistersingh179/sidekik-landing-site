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
import StructDatetimeImage from '../../images/support datetime.gif';

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

export default function QualityOfLifeFeatures() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={StructDatetimeImage}
          objectFit={'cover'}
        />
      </Flex>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Quality of life features
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Supports casting input and output data types between various formats
          like Wei/Eth/USDC, Number/DateTime, Bytes32/String, Gas/Eth/USDC.
        </Text>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          It will build & maintain a list of addresses and groups similar
          functions so you can see relevant things together.
        </Text>
      </VStack>
    </SimpleGrid>
  );
}
