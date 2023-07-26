import Stack from '@mui/material/Stack';
import { NextSeo } from 'next-seo';
import  CalculatePageLayout  from '~/lib/layout/CalculatePageLayout'

const Home = () => {

  return (
    <Stack>
      <NextSeo title="Home" />
      <CalculatePageLayout />
    </Stack>
  );
};

export default Home;
