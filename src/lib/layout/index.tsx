import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Box>
        <Header />
        <Box>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
