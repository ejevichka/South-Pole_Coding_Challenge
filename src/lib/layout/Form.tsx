import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputLabel, MenuItem, SelectChangeEvent, CircularProgress, Box, Alert } from '@mui/material';
import { StyledFormControl } from '~/lib/components/styled-components/StyledFormControl';
import { StyledTextField } from '~/lib/components/styled-components/StyledTextField';
import { StyledSelect } from '~/lib/components/styled-components/StyledSelect'
import { StyledButton } from '~/lib/components/styled-components/StyledButton'
import { ReducerContext } from '~/lib/contexts/AirportDistanceProvider';
import AutocompleteWithServerOptions from '~/lib/components/AutocompleteDebounce';
import useAirportDistance from '~/lib/hooks/useAirportDistance';
import { FormState } from '~/lib/layout/types/FormLayout.types';
import useEmissionsCalculator from '~/lib/hooks/useEmissionsCalculator'

const FlightForm: React.FC = () => {
  const [errorForm, setErrorForm] = useState(false);
  const [isSubmitted, setSubmited] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    From: null,
    To: null,
    passengers: 1,
    roundTrip: 'return'
  });

  const isFormFilled = Object.values(formState).every((value) => value !== null && value !== '');
  const { data, loading, error } = useAirportDistance(formState.From, formState.To, isFormFilled)
  const emission = useEmissionsCalculator(data, formState.passengers)
  const dispatch = useContext(ReducerContext)

  const handleChange = (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent<unknown>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  const handleChangeValidate = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (Number(value) >= 0 && Number.isInteger(Number(value))) {
      setErrorForm(false);
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setErrorForm(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmited(true)
    // Perform form submission logic with the updated formState
    if (isFormFilled && !errorForm) {
      dispatch && dispatch({
        type: 'ADD_FLIGHT',
        payload: {
          ...formState,
          id: uuidv4(), // Generate a unique identifier
          distance: data ? data.distance : 0,
          emission
        }
      })
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="flight_form">
      <AutocompleteWithServerOptions setFormState={setFormState} name={'From'} />
      <AutocompleteWithServerOptions setFormState={setFormState} name={'To'} />

      <StyledTextField
        error={errorForm}
        label="Number of passengers"
        variant="outlined"
        type="number"
        name="passengers"
        value={formState.passengers}
        onChange={handleChangeValidate}
      />

      <StyledFormControl variant="outlined" >
        <InputLabel
          id="demo-simple-select-label"
        >Type</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formState.roundTrip}
          name="roundTrip"
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'return'}>Return</MenuItem>
          <MenuItem value={'single'}>Single</MenuItem>
        </StyledSelect>
      </StyledFormControl>

      <StyledButton type="submit" data-testid='submit-flight' disabled={!isFormFilled}>
        Add
      </StyledButton>
      <Box sx={{ marginTop: 2 }}>
        {loading && isSubmitted && <CircularProgress />}
        {(error && isSubmitted && !loading &&
          <Alert severity="error">Error: {error && error?.message}</Alert>
        )}
      </Box>
    </form>
  );
};

export default FlightForm;
