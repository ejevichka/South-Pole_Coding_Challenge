import React, { createContext, useReducer } from 'react';
import useAirportDistance from '~/lib/hooks/useAirportDistance';
import flightReducer from '~/lib/reducers/flightReducer';
import FlightsDispatchContextWrapper from '~/lib/contexts/flightDispatchContext';

interface AirportDistanceError {
  message: string;
  code?: number; // Make the 'code' property optional
}


export interface AirportDistanceContextProps {
  flights: any | null;
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



export const AirportDistanceContext = createContext<{
  flights: Flight[];
} | null>(null);



interface AirportDistanceProviderProps {
  children: React.ReactNode;
}

const AirportDistanceProvider: React.FC<AirportDistanceProviderProps> = ({
  children,
}) => {
  const [flights, dispatch] = useReducer(flightReducer, []);


  const { from = '', to = '' } = flights[0] || {};
  //const { data, loading, error } = useAirportDistance(from, to, true);
  const FlightsDispatchContext = FlightsDispatchContextWrapper()

  return (
    <AirportDistanceContext.Provider
      value={{ flights }}
    >
      <FlightsDispatchContext.Provider value={dispatch as any}>
      {children}
      </FlightsDispatchContext.Provider>
    </AirportDistanceContext.Provider>
  );
};

export default AirportDistanceProvider;
