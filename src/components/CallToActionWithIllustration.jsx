import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  Icon,
  Box,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Stack
      textAlign={'center'}
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
      >
        Build, deploy & inspect Smart Contracts
      </Heading>
      <Text color={'gray.500'} maxW={'3xl'}>
        Sidekik is a dev tool which will monitor your EVM chain and in real-time
        build a UI for your contracts so you can interact with them even while
        you are still coding them.
      </Text>
      <Stack spacing={6} direction={'row'}>
        <Link href={'https://docs.sidekik.xyz'} _hover={{textDecoration: 'none'}}>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Link>
        <Link href={'https://app.sidekik.xyz'} _hover={{textDecoration: 'none'}}>
          <Button rounded={'full'} px={6} colorScheme={'purple'}>
            Enter App
          </Button>
        </Link>
      </Stack>
      <Box
        as="iframe"
        src="https://www.youtube.com/embed/tek6NCQFv7s"
        width="full"
        allow="autoplay"
        border={'none'}
        sx={{
          aspectRatio: '16/9',
        }}
      />
    </Stack>
  );
}
