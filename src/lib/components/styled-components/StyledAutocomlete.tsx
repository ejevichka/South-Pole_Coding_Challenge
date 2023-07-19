import { styled } from '@mui/material/styles'
import { Autocomplete } from '@mui/material'

//component-specific styles
export const StyledAutocomplete = styled(Autocomplete)`
  width: 100%;
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(1, 85, 151);
  }
`;