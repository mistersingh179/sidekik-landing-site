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
  Divider,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WithSubnavigation from './components/WithSubnavigation';
import CallToActionWithIllustration from './components/CallToActionWithIllustration';
import LargeWithLogoLeft from './components/LargeWithLogoLeft';
import TableOrSimpleGrid from './exp/TableOrSimpleGrid';
import BuildUiRealTime from './components/features/BuildUiRealTime'
import SupportsStructFeature from './components/features/SupportsStructFeature'
import QualityOfLifeFeatures from './components/features/QualityOfLifeFeatures'
import ImpersonateFeature from './components/features/ImpersonateFeature'
import UseWithDeployedContracts
  from './components/features/UseWithDeployedContracts'
import InteractWithOtherContractsFeature
  from './components/features/InteractWithOtherContractsFeature';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'container.xl'} align={'center'}>
        <WithSubnavigation />
        <CallToActionWithIllustration />

        <Divider bg={'green'} my={10} />
        <BuildUiRealTime />

        <Divider bg={'green'} my={10} />
        <InteractWithOtherContractsFeature />

        <Divider bg={'green'} my={10} />
        <ImpersonateFeature />

        <Divider bg={'green'} my={10} />
        <SupportsStructFeature />

        <Divider bg={'green'} my={10} />
        <QualityOfLifeFeatures />

        <Divider bg={'green'} my={10} />
        <UseWithDeployedContracts />

        <Box my={10} />
        <LargeWithLogoLeft />
      </Container>
    </ChakraProvider>
  );
}

export default App;
