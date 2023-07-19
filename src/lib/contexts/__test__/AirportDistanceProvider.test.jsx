import { render } from '@testing-library/react';
import { ReducerContext, AirportDistanceContext } from '~/lib/contexts/AirportDistanceProvider';
import FlightData from '~/lib/layout/FlightData'

describe('AirportDistanceProvider', () => {
  test('provides the correct context values', () => {
    // Create a mock dispatch function
    const mockDispatch = jest.fn();

    // Render the component and provide the mock dispatch function
    render(
      <ReducerContext.Provider value={mockDispatch}>
        <AirportDistanceContext.Provider value={{ flights: [] }}>
          <FlightData />
        </AirportDistanceContext.Provider>
      </ReducerContext.Provider>
    );

    // Assert that the context values are provided correctly
    expect(mockDispatch).toHaveBeenCalledTimes(0); // Check if the mock dispatch function is called as expected
    // Add more assertions for other context values if necessary
  });
});
