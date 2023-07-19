import { Flight, FlightAction } from '~/lib/reducers/types';
import flightReducer, { initialState } from './flightReducer';


describe('flightReducer', () => {
  it('should add a flight to the state when receiving ADD_FLIGHT action', () => {
    const action: FlightAction = {
      type: 'ADD_FLIGHT',
      payload: {
        From: {
          value: 'DOH',
          label: 'Hamad International Airport (DOH)',
        },
        To: {
          value: 'KIX',
          label: 'Kansai International Airport (KIX)',
        },
        passengers: 2,
        roundTrip: 'return',
        id: '2',
        emission: 0, // Add the missing properties from the Flight interface
        distance: 0, // Add the missing properties from the Flight interface
      },
    };

    const newState: Flight[] = flightReducer(initialState, action);

    expect(newState).toHaveLength(2);
    expect(newState[1].From!.value).toBe('DOH');
    expect(newState[1].To!.value).toBe('KIX');
    expect(newState[1].passengers).toBe(1);
    expect(newState[1].roundTrip).toBe('return');
    expect(newState[1].id).toBe('2');
  });

  it('should remove a flight from the state when receiving REMOVE_FLIGHT action', () => {
    const action: FlightAction = {
      type: 'REMOVE_FLIGHT',
      id: '1',
    };

    const newState: Flight[] = flightReducer(initialState, action);

    expect(newState).toHaveLength(0);
  });

  it('should set the emissionCount of a flight when receiving SET_EMISSION_COUNT action', () => {
    const action: FlightAction = {
      type: 'SET_EMISSION_COUNT',
      id: '1',
      emissionCount: 0.205,
    };

    const newState: Flight[] = flightReducer(initialState, action);

    expect(newState[0].emission).toBe(0.205);
  });

});
