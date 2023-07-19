import { useEffect, useState } from 'react';
import { IAirportDistance } from '~/lib/hooks/types/useAirportDistance.types'

const EMISSIONS_PER_PASSENGER_KM = 285; // grams

const useEmissionsCalculator = (
  data: IAirportDistance | null,
  passengers: number
): number => {
  const [emissions, setEmissions] = useState<number>(0);

  useEffect(() => {
    const calculateEmissions = (): void => {
    if (data!==null) {
      const totalEmissions: number =
        (EMISSIONS_PER_PASSENGER_KM * data.distance * passengers) / 1000000; // Convert grams to metric tonnes
      setEmissions(totalEmissions);
    }
    };

    calculateEmissions();
  }, [data, passengers]);

  return emissions;
};

export default useEmissionsCalculator;
