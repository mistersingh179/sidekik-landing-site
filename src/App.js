import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WithSubnavigation from './components/WithSubnavigation';
import CallToActionWithIllustration from './components/CallToActionWithIllustration';
import SplitWithImage from './components/SplitWithImage';
import LargeWithLogoLeft from './components/LargeWithLogoLeft';
import TableOrSimpleGrid from './exp/TableOrSimpleGrid';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'container.xl'} p={0} align={'center'}>
        <WithSubnavigation />
        <CallToActionWithIllustration />
        {/*<SplitWithImage />*/}
        {/*<SplitWithImage imageFirst={true} />*/}
        {/*<SplitWithImage />*/}
        <LargeWithLogoLeft />
      </Container>
    </ChakraProvider>
  );
}

export default App;
