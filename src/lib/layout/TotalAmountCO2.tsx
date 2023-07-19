import React from 'react'
import { Typography } from "@mui/material"
import CountingNumber from '~/lib/components/samples/CountingNumber'

interface TotalAmountCO2Props {
  CO2data: number;
}

const TotalAmountCO2: React.FC<TotalAmountCO2Props> = ({ CO2data }) => {

  return (
    <>
      <Typography variant="h6" component="h2" data-testid="heading-footprint">
        Your CO2 footprint
      </Typography>
      <Typography variant="h2" component="h2" data-testid="heading-footprint">
        <CountingNumber to={CO2data} />
      </Typography> 
    </>
  );
}

export default TotalAmountCO2;
