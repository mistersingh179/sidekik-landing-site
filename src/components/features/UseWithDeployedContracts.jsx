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
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={AlreadyDeployedContractImage}
          objectFit={'cover'}
        />
      </Flex>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Works with already deployed contracts
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Lets say you want to interact with a contract on mainnet. Just type in
          your mainnet RPC node address or connect to it via metamask. Then enter
          the contract address & sidekik will give you the UI.
        </Text>
      </VStack>
    </SimpleGrid>
  );
}
