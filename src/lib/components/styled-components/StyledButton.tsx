import { styled } from '@mui/material/styles'
import { Button, ButtonProps as MuiButtonProps } from '@mui/material'

interface CustomButtonProps extends Omit<MuiButtonProps, 'classes'> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Component-specific styles
export const StyledButton = styled(Button)<CustomButtonProps>`
  && {
    width: 200px;
    height: 50px;
    font-size: 1rem;
    font-weight: 200;
    background-color: #1D5692;
    color: white;
    border: none;
    outline: none;
    margin-top: 24px;

    /* Styles for disabled state */
    &:disabled {
      background-color: rgb(235, 235, 235);
      color: #ffffff;
      cursor: not-allowed;
    }
  }

  &&:hover {
    background-color: #1D5692;
  }
`;
