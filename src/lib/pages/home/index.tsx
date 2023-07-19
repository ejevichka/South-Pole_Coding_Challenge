import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import  CalculatePageLayout  from '~/lib/layout/CalculatePageLayout'

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
      <CalculatePageLayout />
    </Flex>
  );
};

export default Home;
