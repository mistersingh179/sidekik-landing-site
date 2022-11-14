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
import SupportsStructsImage from '../../images/struct support.gif';

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

export default function SupportsStructFeature() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <VStack justify={'center'} align={'start'}>
        <Heading size={'lg'} mb={5}>
          Support all data types & data structures
        </Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          Along with basic data types like uint, address, string etc., Sidekik
          also supports complex data strutures like Arrays, Structs, Arrays of
          Structs etc.
        </Text>
        <Text color={'gray.500'} fontSize={'lg'} textAlign={'left'}>
          It auto builds UI to accept complex data structures like arrays and
          structs as inputs and in outputs and events.
        </Text>
      </VStack>
      <Flex>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={SupportsStructsImage}
          objectFit={'cover'}
        />
      </Flex>
    </SimpleGrid>
  );
}
