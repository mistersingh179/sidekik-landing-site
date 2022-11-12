import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

export default function TableOrSimpleGrid(props) {
  return (
    <SimpleGrid
      columns={3}
      spacingX={'40px'}
      spacingY={'20px'}
      w={'full'}
      m={20}
    >
      <Box bg={'green.50'}>
        <VStack
          border={'1px'}
          borderColor={'gray.200'}
          spacing={2}
          p={2}
          align={'start'}
        >
          <Heading size={'sm'}>Inputs</Heading>
          <Input type={'text'} placeholder={'a'} />
          <Input type={'text'} placeholder={'b'} />
          <Input type={'text'} placeholder={'c'} />
        </VStack>
      </Box>
      <Box bg={'green.50'} textAlign={'center'} alignSelf={'center'}>
        <Button colorScheme={'blue'}>Interact</Button>
      </Box>
      <Box bg={'green.50'}>
        <VStack
          border={'1px'}
          borderColor={'gray.200'}
          spacing={2}
          p={2}
          align={'start'}
        >
          <Heading size={'sm'}>Outputs</Heading>
          <Input type={'text'} placeholder={'a'} />
          <Input type={'text'} placeholder={'b'} />
          <Input type={'text'} placeholder={'c'} />
        </VStack>
      </Box>
    </SimpleGrid>
  );
}
