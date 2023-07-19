import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box>
      <Typography data-testid="heading_h6" variant="h6" component="h6" align={'center'}>
        {new Date().getFullYear()} - {'South Pole'} 
      </Typography>
    </Box>
  );
};

export default Footer;
