import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Language } from '@mui/icons-material';

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
    <AppBar position="static">
      <Toolbar>
        <img src="/logo.png" alt="Logo" style={{ height: 30, marginRight: 'auto' }} />

        <Typography variant="h6" style={{ marginRight: 'auto' }}>
          Calculate footprint
        </Typography>

        <Button color="inherit">Explore Projects</Button>

        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>

        <Button color="inherit" >
          Log in
        </Button>

        <IconButton color="inherit" onClick={handleLanguageClick}>
          <Language />
        </IconButton>
        <Menu
          anchorEl={languageAnchorEl}
          keepMounted
          open={Boolean(languageAnchorEl)}
          onClose={handleLanguageClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('EN')}>
            EN
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('EUR')}>
            EUR
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
