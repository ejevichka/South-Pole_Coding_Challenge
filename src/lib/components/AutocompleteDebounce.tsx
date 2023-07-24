import React, { useState, SyntheticEvent } from 'react'
import { CircularProgress } from '@mui/material'
import { StyledTextField } from '~/lib/components/styled-components/StyledTextField'
import { StyledAutocomplete } from '~/lib/components/styled-components/StyledAutocomlete'
import { FormState } from '~/lib/layout/types/FormLayout.types'
import { useFetchOptions } from '~/lib/hooks/useOptions'
import { Option } from '~/lib/components/samples/types'

interface IProps {
  setFormState: (prevState: (prev: FormState) => FormState) => void;
  name: string
}

const AutocompleteWithServerOptions: React.FC<IProps> = ({setFormState, name}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [value, setValue] = React.useState<Option | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useFetchOptions({ inputValue, setError, setOptions, setIsLoading });

  return (
    <StyledAutocomplete
      options={options}
      getOptionLabel={(option:unknown | Option) => (option as Option).label}
      loading={isLoading}
      inputValue={inputValue}
      value={value}
      autoComplete
      includeInputInList
      data-testid={`autocomplete-${name}`}
      filterSelectedOptions
      onChange={(event: SyntheticEvent<Element, Event>, newValue: Option | unknown) => {
        event.preventDefault()
        setOptions(newValue ? [newValue as Option, ...options] : (options as Option[]));
        setValue(newValue as Option);
        setFormState((prevState: FormState) => ({
          ...prevState,
          [name]: (newValue as Option)
        }));
      }}
      onInputChange={(event, newInputValue) => {
        event.preventDefault
        setInputValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <li {...props}>
          {(option as Option).label}
        </li>
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          label={name}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      noOptionsText={error}
    />
  );
};

export default AutocompleteWithServerOptions;
