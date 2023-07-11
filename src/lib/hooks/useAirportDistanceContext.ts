import { useContext } from 'react';
// Custom hook to access the context values
const useAirportDistanceContext = (): AirportDistanceContextProps => {
    const context = useContext(AirportDistanceContext);
  
    if (!context) {
      throw new Error('useAirportDistanceContext must be used within an AirportDistanceProvider');
    }
  
    return context;
  };