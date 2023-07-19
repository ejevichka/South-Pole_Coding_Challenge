import React, { createContext, useReducer } from 'react'
import flightReducer from '~/lib/reducers/flightReducer'
import { AirportDistanceProviderProps } from '~/lib/contexts/types'
import { FlightAction } from '~/lib/reducers/types'
import { AirportDistanceContextProps } from '~/lib/contexts/types'

export const AirportDistanceContext = createContext<AirportDistanceContextProps | null>(null);

export const ReducerContext = createContext<React.Dispatch<FlightAction> | null>(null);

const AirportDistanceProvider: React.FC<AirportDistanceProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(flightReducer, []);

  return (
    <AirportDistanceContext.Provider
      value={{ flights: state }} // Pass the state as the value
    >
      <ReducerContext.Provider value={dispatch as React.Dispatch<FlightAction>}>
        {children}
      </ReducerContext.Provider>
    </AirportDistanceContext.Provider>
  );
};

export default AirportDistanceProvider;
