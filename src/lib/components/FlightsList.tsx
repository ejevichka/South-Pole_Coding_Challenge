import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import { Flight, FlightAction } from '~/lib/reducers/types';
import { Delete } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface FlightListProps {
  flights: Flight[];
  dispatch: React.Dispatch<FlightAction> | null;
}

const FlightList: React.FC<FlightListProps> = ({ flights, dispatch }) => {
  const handleDelete = (id: string | undefined) => {
    dispatch && dispatch({ type: 'REMOVE_FLIGHT', id })
  };

  return (
    <Box
      sx={{
        mt: 6,
        mb: 6,
        display: "flex",
        flexDirection: "column",
        height: { xs: 'auto', md: 300 },
        maxHeight: { xs: 300, md: 300 },
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
       <Typography variant="h6" sx={{ marginBottom: 3 }}>
        Number of records: {flights.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="flight table">
          <TableHead>
            <TableRow>
              <TableCell>Departure</TableCell>
              <TableCell>Arrival</TableCell>
              <TableCell align="right">CO2 footprint</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <TableRow
                key={flight.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{flight.From?.value || 'N/A'}</TableCell>
                <TableCell component="th" scope="row">{flight.To?.value || 'N/A'} </TableCell>
                <TableCell align="right">{flight.emission.toFixed(2)} </TableCell>
                <TableCell align="right"><IconButton onClick={() => handleDelete(flight.id)}>
                  <Delete />
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      );
};

export default FlightList;
