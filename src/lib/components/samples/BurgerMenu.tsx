import { useState } from 'react';
import {
    IconButton,
    SwipeableDrawer,
} from '@mui/material';
import { DensityMedium } from '@mui/icons-material';
import MobileNav from '~/lib/components/samples/MobileNav'

export default function BurgerMenu() {
    const [state, setState] = useState(false);
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };
    return (
        <>
            <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: '#1D5692' }}
                onClick={toggleDrawer(true)}
            >
                <DensityMedium />
            </IconButton>
            <SwipeableDrawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <MobileNav />
            </SwipeableDrawer>
        </>
    );
}

