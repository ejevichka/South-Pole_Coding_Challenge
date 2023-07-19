import React from 'react';
import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  MenuItem
} from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';
import { StyledMenu, StyledMenuItem } from '~/lib/components/styled-components/StyledMenu'
import BurgerMenu from '~/lib/components/samples/BurgerMenu'

const Header: React.FC = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };


  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleMenuItemClick = (lang: string) => {
    // Handle language selection
    console.log('Selected language:', lang);
    handleLanguageClose();
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box display='flex' flexGrow={1}>
          <Image
            src="/logo.png"
            width={150}
            height={32}
            alt="Picture of the author"
          />
        </Box>

        <Box sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
          <Typography variant="h6" color="primary" sx={{ marginRight: 4 }}>
            Calculate footprint
          </Typography>

          <Typography variant="h6" color="primary" sx={{ marginRight: 4 }}>
            Explore project
          </Typography>

          <IconButton color="primary" >
            <ShoppingCart />
          </IconButton>
          <Typography variant="h6" color="primary" sx={{ marginRight: 2 }}>
              My card
            </Typography>

          <IconButton color="primary" onClick={handleLanguageClick} >
            <Person />
          </IconButton>
          <Typography variant="h6" color="primary" sx={{ marginRight: 3 }}>
              Log in
          </Typography>
          <StyledMenu
            anchorEl={languageAnchorEl}
            keepMounted
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageClose}
          >
            <StyledMenuItem onClick={() => handleMenuItemClick('EN')} >
              EN
            </StyledMenuItem>
            <MenuItem onClick={() => handleMenuItemClick('EUR')} >
              EUR
            </MenuItem>
          </StyledMenu>
        </Box>
        {/* Burger Menu for Mobile */}
        <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', align: 'right', display: { xs: 'flex', md: 'none' } }}>
          <BurgerMenu />
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
