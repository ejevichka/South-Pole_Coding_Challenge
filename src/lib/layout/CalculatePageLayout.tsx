import { useContext } from 'react';
import { Typography, Grid, Box } from '@mui/material'
import FormLayout from '~/lib/layout/FormLayout'
import { ReducerContext } from '~/lib/contexts/AirportDistanceProvider';
import FlightList from '~/lib/components/FlightsList'
import { useAirportDistanceContext } from '~/lib/hooks/useAirportDistanceContext'
import FlightData from '~/lib/layout/FlightData'
import { LinkedButton } from '~/lib/components/samples/LinkedButton'

//parrent component in terms of react composition pattern
function CalculatePageLayout() {
  const { flights } = useAirportDistanceContext()
  const dispatch = useContext(ReducerContext)
  const showCalcEmission = flights.length > 0 && flights.every(item=>item.emission > 0)

  return (
    <Box sx={{ padding: { xs: 2, md: 4}}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 5 }} sx={{ padding: 4, marginTop: 4 }}>
      <Grid item xs={12} md={8} >
        <FormLayout />
        {showCalcEmission && <FlightList flights={flights} dispatch={dispatch}/>}
      </Grid>
      <Grid item xs={12} md={4}>
      <Typography variant="h6" component="h6">
        World average CO2 footprint per person per year
      </Typography>
      <Typography variant="h2" component="h2">
        6.1 tonnes
      </Typography>
      {showCalcEmission && <FlightData />}
      <LinkedButton />
      </Grid>
    </Grid>
    </Box>
  );
}

export default CalculatePageLayout;
