import { useEffect, useState } from 'react';

const EMISSIONS_PER_PASSENGER_KM = 285; // grams

const useEmissionsCalculator = (
    data: any,
    passengers: number
): number => {
    const [emissions, setEmissions] = useState<number>(0);
    const distance = !!data ? data?.distance : 0

    useEffect(() => {
        if (data && passengers) {
            const calculateEmissions = (): void => {
                const totalEmissions: number =
                    (EMISSIONS_PER_PASSENGER_KM * distance * passengers) / 1000; // Convert grams to kilograms
                setEmissions(totalEmissions);
            };

        calculateEmissions();
    }
  }, [data, passengers]);

return emissions;
};

export default useEmissionsCalculator;
