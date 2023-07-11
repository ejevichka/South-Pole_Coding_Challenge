import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
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
