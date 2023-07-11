import React, { createContext, useReducer } from 'react';
import flightReducer from '~/lib/reducers/flightReducer';


type FlightAction =
  | { type: 'ADD_FLIGHT'; flight: any }
  | { type: 'REMOVE_FLIGHT'; id: string };
interface FlightDispatchContextProps {
    dispatch: React.Dispatch<FlightAction>;
  }

const FlightsDispatchContextWrapper = () => {
const [dispatch] = useReducer(flightReducer, []);
return createContext<FlightDispatchContextProps>(dispatch);

}

export default FlightsDispatchContextWrapper

