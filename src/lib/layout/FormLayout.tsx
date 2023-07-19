import FlightForm from '~/lib/layout/Form';
import { Typography, Box } from "@mui/material"


//parrent component in terms of react composition pattern
function FormLayout() {

  return (
    <Box>
      <Typography data-testid="heading_h1" variant="h1" component="h1">
        CALCULATE YOUR FOOTPRINT
      </Typography>
      <Typography data-testid="heading_h6" variant="h6" component="h6">
        Understand your footprint and compensate for your emissions. It takes less than a minute to measure your impact.
      </Typography>
      <FlightForm />
    </Box>
  );
}

export default FormLayout;


