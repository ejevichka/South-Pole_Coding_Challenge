import { renderHook } from '@testing-library/react';
import { AirportDistanceContext } from '~/lib/contexts/AirportDistanceProvider';
import { useAirportDistanceContext } from '~/lib/hooks/useAirportDistanceContext'

describe('useAirportDistanceContext', () => {
  it('should return the context values', () => {
    const contextValues = {
      // Define your mock context values here
      // Adjust the values according to your actual context structure
      data: { distance: 500 },
      loading: false,
      error: null,
    };

    // Wrap the hook in a provider with the mock context values
    const wrapper= ({ children }) => (
      <AirportDistanceContext.Provider value={contextValues}>
        {children}
      </AirportDistanceContext.Provider>
    );

    // Use the renderHook function from @testing-library/react-hooks to test the hook
    const { result } = renderHook(() => useAirportDistanceContext(), { wrapper });

    // Assert that the returned values match the mock context values
    expect(result.current.data).toEqual(contextValues.data);
    expect(result.current.loading).toEqual(contextValues.loading);
    expect(result.current.error).toEqual(contextValues.error);
  });
});
