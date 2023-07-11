import { useContext } from 'react';
import {AirportDistanceContext, AirportDistanceContextProps } from '~/lib/contexts/AirportDistavceProvider'
// Custom hook to access the context values
export const useAirportDistanceContext = (): AirportDistanceContextProps => {
    const context = useContext(AirportDistanceContext);
  
    if (!context) {
      throw new Error('useAirportDistanceContext must be used within an AirportDistanceProvider');
    }
  
    return context;
  };