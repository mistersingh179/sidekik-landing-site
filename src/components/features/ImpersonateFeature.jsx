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
import ImpersonateAddressImage from '../../images/impersonate address.gif';

export default function ImpersonateFeature() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={ImpersonateAddressImage}
          objectFit={'cover'}
        />
      </Flex>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Impersonate Accounts
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          If you are using hardhat, you can impersonate any account by just
          typing their address.
        </Text>
      </VStack>
    </SimpleGrid>
  );
}
