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
import ShorterInteractingWithOtherContracts from '../../images/shorter_interacting_with_other_contracts.gif';

export default function InteractWithOtherContractsFeature() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Interact with other on chain contracts
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          You can also add already deployed on chain contracts in to sidekik and
          interact with it. To add a contract all you need is its address.
        </Text>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          This is especially useful when you are writing a contract which
          further interacts with another contract like USDC, Uniswap etc.
        </Text>
      </VStack>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={ShorterInteractingWithOtherContracts}
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
  );
}
