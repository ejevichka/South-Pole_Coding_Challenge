import { Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledMenu = styled(Menu)`
  && {
    /* Add your custom styles here */
    /* For example: */
    backgroundColor: '#f0f0f0',
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    /* Add your custom styles here */
    /* For example: */
    color: theme.palette.text.primary,
    fontSize: '1.2rem',
    fontWeight: 200,
    fontFamily: 'Roboto, sans-serif',
  }
`;