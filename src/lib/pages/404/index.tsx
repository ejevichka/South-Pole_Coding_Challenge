import { Typography, Grid } from '@mui/material'
import { NextSeo } from 'next-seo';

import MotionBox from '~/lib/components/motion/Box';

const Page404 = () => {

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 5 }} sx={{ padding: 4, marginTop: 4 }}>
      <Grid item xs={12} md={12} >
      <NextSeo title="404 Not Found" />
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={{ base: '100%', sm: '70%', md: '60%' }}
        margin="0 auto"
      >
      </MotionBox>

        <Typography variant="h2" component="h2">
          Page not Found.
        </Typography>
      </Grid>
      </Grid>
  );
};

export default Page404;
