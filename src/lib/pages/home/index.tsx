import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { Button } from '@chakra-ui/react'

import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import StepperForm from '~/lib/layout/StepperForm'

const Home = () => {

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <StepperForm />
    </Flex>
  );
};

export default Home;
