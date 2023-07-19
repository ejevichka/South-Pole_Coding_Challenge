import { styled } from '@mui/material/styles'
import { Select } from '@mui/material'

//component-specific styles
export const StyledSelect = styled(Select)`
  width: 100%;

  .MuiOutlinedInput-root {
    border-color: rgb(1, 85, 151);
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(1, 85, 151);
  }
`;