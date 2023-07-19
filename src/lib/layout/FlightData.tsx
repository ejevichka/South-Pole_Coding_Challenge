import React from 'react';
import { useAirportDistanceContext } from '~/lib/hooks/useAirportDistanceContext'
import { Typography, Box } from "@mui/material"
import TotalAmountCO2 from '~/lib/layout/TotalAmountCO2';

const FlightData: React.FC = () => {
  const { flights = [] } = useAirportDistanceContext()
  const sum = flights.reduce((acc, item) => acc + item?.emission, 0)

  return (
    <Box data-testid='TotalAmountCO2-results' sx={{ marginTop: 8 }}>
      {flights.length === 0 &&
        <Typography data-testid="heading_h6" variant="h6" component="h6">
          No data available
        </Typography>}
      {
        sum && <TotalAmountCO2 data-testid="TotalAmountCO2" CO2data={sum}></TotalAmountCO2>
      }
    </Box>
  );
};

export default FlightData;
