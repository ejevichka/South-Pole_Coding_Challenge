import { Flight, FlightAction } from '~/lib/reducers/types';

export const initialState = [{
  From: {
    value: '',
    label: ''
  },
  To: {
    value: '',
    label:''
  },
  passengers: 2,
  roundTrip: 'return',
  id: '2',
  emission: 0, // Add the missing properties from the Flight interface
  distance: 0, // Add the missing properties from the Flight interface
}]

const flightReducer = (state: Flight[], action: FlightAction): Flight[] => {
  switch (action.type) {
    case 'ADD_FLIGHT':
      const newFlight: Flight = {
        ...action.payload
      };
      return [...state, newFlight];
    case 'REMOVE_FLIGHT':
      return state.filter((flight) => flight.id !== action.id);
    case 'SET_EMISSION_COUNT': // New action type to set emissionCount by ID
      return state.map((flight) =>
        flight.id === action.id ? { ...flight, emissionCount: action.emissionCount } : flight
      );
    default:
      return state;
  }
};

export default flightReducer;
