import React, { useState, useContext } from 'react';
import useAirportDistance from '~/lib/hooks/useAirportDistance';
import FlightForm from '~/lib/components/samples/StepperLayout';
import TotalAmountCO2 from '~/lib/components/samples/TotalAmountCO2';
import useEmissionsCalculator from '~/lib/hooks/useEmissionsCalculator'
import { CircularProgress } from "@mui/material"


const url = 'https://sitaopen.api.aero/data/v3/airports/distance';

//parrent component in terms of react composition pattern
function StepperForm() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({ searchSelect1: '', searchSelect2: '', numOfTravellers: 1, roundTrip: true });
  const { data, loading, error } = useAirportDistance(url, formData.searchSelect1, formData.searchSelect2, showResults);
  const emissions: number = useEmissionsCalculator(data, formData.numOfTravellers);


  return (
    <>
      <h1 data-testid="heading">
        CALCULATE YOUR FOOTPRINT
      </h1>
      <h2>Understand your footprint and compensate for your emissions. It takes less than a minute to measure your impact.</h2>
      <FlightForm />
      {loading &&
        <CircularProgress />}
      {error && <p>Error: {error.message}</p>}
      {showResults && !loading && !error && (
        <TotalAmountCO2 data-testid="TotalAmountCO2" CO2data={emissions}></TotalAmountCO2>
      )}
    </>
  );
}

export default StepperForm;
