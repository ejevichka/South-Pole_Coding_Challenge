import { v4 as uuidv4 } from 'uuid';

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
  | { type: 'ADD_FLIGHT'; payload: Flight }
  | { type: 'REMOVE_FLIGHT'; id: string };

const flightReducer = (state: Flight[], action: FlightAction): Flight[] => {
  switch (action.type) {
    case 'ADD_FLIGHT':
      console.log("action.flight", action.payload)
      return [...state, action.payload];
    case 'REMOVE_FLIGHT':
      return state.filter((flight) => flight.id !== action.id);
    default:
      return state;
  }
};

export default flightReducer;
