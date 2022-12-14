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
import AlreadyDeployedContractImage from '../../images/already deployed contract.gif';

export default function UseWithDeployedContracts() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Interact with deployed contracts
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Lets say you want to interact with a contract on mainnet. Connect to
          metamask and then enter the contract address. Sidekik will build an
          intractable UI for your contract.
        </Text>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Sidekik will route all transactions via metamask so you are always in
          full control when interacting with production contracts.
        </Text>
      </VStack>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={AlreadyDeployedContractImage}
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
  );
}
