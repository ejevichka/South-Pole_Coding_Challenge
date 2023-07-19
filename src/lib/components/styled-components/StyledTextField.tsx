import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

//component-specific styles
export const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 24px;

  .MuiOutlinedInput-root {
    border-color: rgb(1, 85, 151);
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(1, 85, 151);
  }
`;