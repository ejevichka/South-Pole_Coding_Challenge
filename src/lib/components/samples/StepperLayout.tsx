import React, { useState, useRef, ChangeEvent, FormEvent, useContext } from 'react';
import { TextField, Button, Autocomplete, Checkbox, Label } from '@mui/material';
import { FlightsDispatchContext } from '~/lib/contexts/flightDispatchContext';

interface Airport {
  value: string;
  label: string;
}

interface FormState {
  from: Airport | null;
  to: Airport | null;
  passengers: string;
  roundTrip: boolean
}

const airports: Airport[] = [
  { value: 'DOH', label: 'Hamad International Airport (DOH)' },
  { value: 'HND', label: 'Haneda Airport (HND)' },
  { value: 'SIN', label: 'Singapore Changi Airport (SIN)' },
  { value: 'ICN', label: 'Incheon International Airport (ICN)' },
  { value: 'NRT', label: 'Narita International Airport (NRT)' },
  { value: 'MUC', label: 'Munich Airport (MUC)' },
  { value: 'ZRH', label: 'Zurich Airport (ZRH)' },
  { value: 'LHR', label: 'Heathrow Airport (LHR)' },
  { value: 'KIX', label: 'Kansai International Airport (KIX)' },
  { value: 'HX', label: 'Hong Kong International Airport (HX)' },
];

const FlightForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    from: null,
    to: null,
    passengers: '',
    roundTrip: true
  });

  const dispatch = useContext(FlightsDispatchContext);
  const toRef = useRef<HTMLInputElement | null>(null);
  const passengersRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission logic with the updated formState
    console.log("formState", formState)
    dispatch({ type: 'ADD_FLIGHT', payload: formState });
    setFormState({
      from: null,
      to: null,
      passengers: '',
      roundTrip: true
    });

    // Set focus on the next input field after submitting the form
    if (toRef.current) {
      toRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        options={airports}
        getOptionLabel={(option) => option.label}
        value={formState.from}
        onChange={(event, newValue) => {
          if (newValue) {
            setFormState((prevState) => ({
              ...prevState,
              from: newValue,
            }));
          }
        }}
        renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
      />

      <Autocomplete
        options={airports}
        getOptionLabel={(option) => option.label}
        value={formState.to}
        onChange={(event, newValue) => {
          if (newValue) {
            setFormState((prevState) => ({
              ...prevState,
              to: newValue,
            }));
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="To"
            variant="outlined"
            inputRef={toRef}
          />
        )}
      />

      <TextField
        label="Number of passengers"
        variant="outlined"
        name="passengers"
        value={formState.passengers}
        onChange={handleChange}
        inputRef={passengersRef}
      />
      <Label>Round Trip </Label>
     <Checkbox defaultChecked  value={formState.roundTrip}
        onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FlightForm;
