import React, { createContext, useReducer } from 'react';
import useAirportDistance from '~/lib/hooks/useAirportDistance';
import flightReducer from '~/lib/reducers/flightReducer';
import { FlightsDispatchContext } from '~/lib/contexts/flightDispatchContext';

interface AirportDistanceError {
  message: string;
  code?: number; // Make the 'code' property optional
}

interface AirportDistanceContextProps {
  flights: any | null;
  data: any;
  loading: boolean;
  error: AirportDistanceError | null;
  dispatch: any;
}

interface Airport {
  value: string;
  label: string;
}

interface Flight {
  id: string;
  from: Airport | null;
  to: Airport | null;
  passengers: string;
  roundTrip: boolean;
}

type FlightAction =
  | { type: 'ADD_FLIGHT'; flight: Flight }
  | { type: 'REMOVE_FLIGHT'; id: string };

export const AirportDistanceContext = createContext<{
  flights: Flight[];
  dispatch: React.Dispatch<FlightAction>;
} | null>(null);



interface AirportDistanceProviderProps {
  children: React.ReactNode;
}

const AirportDistanceProvider: React.FC<AirportDistanceProviderProps> = ({
  children,
}) => {
  const [flights, dispatch] = useReducer(flightReducer, []);
  console.log('HERERERRERERRE', flights);

  const { from = '', to = '' } = flights[0] || {};
  const { data, loading, error } = useAirportDistance(from, to, true);

  return (
    <AirportDistanceContext.Provider
      value={{ flights, data, loading, error, dispatch }}
    >
      <FlightsDispatchContext.Provider value={dispatch}>
      {children}
      </FlightsDispatchContext.Provider>
    </AirportDistanceContext.Provider>
  );
};

export default AirportDistanceProvider;
