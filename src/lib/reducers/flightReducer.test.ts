import flightReducer, { initialState } from './flightReducer';
import { Flight, FlightAction } from '~/lib/reducers/types';

describe('flightReducer', () => {
  it('should add a new flight when receiving ADD_FLIGHT action', () => {
    const prevState = [...initialState];
    const newFlight = {
      From: {
        value: 'New York',
        label: 'New York'
      },
      To: {
        value: 'London',
        label: 'London'
      },
      passengers: 1,
      roundTrip: 'return',
      id: '3',
      emission: 100,
      distance: 2000,
    };

    const action: FlightAction = {
      type: 'ADD_FLIGHT',
      payload: newFlight,
    };

    const newState = flightReducer(prevState, action);

    expect(newState).toHaveLength(prevState.length + 1);
    expect(newState[newState.length - 1]).toEqual(newFlight);
  });

  it('should remove a flight when receiving REMOVE_FLIGHT action', () => {
    const prevState = [
      ...initialState,
      {
        From: {
          value: 'New York',
          label: 'New York'
        },
        To: {
          value: 'London',
          label: 'London'
        },
        passengers: 1,
        roundTrip: 'return',
        id: '3',
        emission: 100,
        distance: 2000,
      },
    ];

    const action: FlightAction = {
      type: 'REMOVE_FLIGHT',
      id: '2', // Flight ID to remove
    };

    const newState = flightReducer(prevState, action);

    expect(newState).toHaveLength(prevState.length - 1);
    expect(newState.some((flight) => flight.id === action.id)).toBe(false);
  });

});
