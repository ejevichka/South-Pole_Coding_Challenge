import { Typography, Grid } from '@mui/material'
import { NextSeo } from 'next-seo';

const Page404 = () => {

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 5 }} sx={{ padding: 4, marginTop: 4 }}>
      <Grid item xs={12} md={12} >
      <NextSeo title="404 Not Found" />
        <Typography variant="h2" component="h2">
          Page not Found.
        </Typography>
      </Grid>
      </Grid>
  );
};

export default Page404;
