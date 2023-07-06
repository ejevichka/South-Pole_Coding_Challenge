import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAirportDistance from '~/lib/hooks/useAirportDistance';
import StepperLayout from '~/lib/components/samples/StepperLayout';
import TotalAmountCO2 from '~/lib/components/samples/TotalAmountCO2';
import useEmissionsCalculator from '~/lib/hooks/useEmissionsCalculator'
import { Heading, Text } from '@chakra-ui/react'

const url = 'https://sitaopen.api.aero/data/v3/airports/distance';

function StepperForm() {
  const { handleSubmit, control, setValue } = useForm();
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({ searchSelect1: '', searchSelect2: '', numOfTravellers: 1, roundTrip: true});
  const { data, loading, error } = useAirportDistance(url, formData.searchSelect1, formData.searchSelect2, showResults);
  const emissions: number = useEmissionsCalculator( data, formData.numOfTravellers);


  const onSubmit = (form: any) => {
    const { searchSelect2, searchSelect1, roundTrip, numOfTravellers } = form;
    setFormData({ searchSelect1: searchSelect1.value, searchSelect2: searchSelect2.value, roundTrip, numOfTravellers });
    setShowResults(true)
  };

  const handleClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <Heading data-testId="heading">
      CALCULATE YOUR FOOTPRINT
      </Heading>
      <Text>Understand your footprint and compensate for your emissions. It takes less than a minute to measure your impact.</Text>
      <StepperLayout data-testid="StepperLayout" control={control} handleClick={handleClick} setValue={setValue} />
      { showResults && <TotalAmountCO2 data-testid="TotalAmountCO2" CO2data={emissions}></TotalAmountCO2> }
    </>
  );
}

export default StepperForm;
