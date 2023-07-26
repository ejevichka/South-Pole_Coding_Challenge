import { useEffect, useState, useMemo } from 'react';
import { Airport } from '~/lib/layout/types/FormLayout.types'
import { IAirportDistance, AirportDistanceError } from '~/lib/hooks/types/useAirportDistance.types'


const useAirportDistance = (
  from: Airport | null,
  to: Airport | null,
  showResults: boolean
): {
  data: IAirportDistance | null;
  loading: boolean;
  error: AirportDistanceError | null;
} => {
  const [data, setData] = useState<IAirportDistance | null>(null);
  const [error, setError] = useState<AirportDistanceError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (showResults && from!== null && to!==null) {
      const abortController = new AbortController();
      setLoading(true)
      const fetchData = async (): Promise<void> => {
        try {
          //performed local api endpoint to request data
          const dummyUrl = `http://localhost:3000/api/sitaopen.api?from=${from.value}&to=${to.value}`
          const response = await fetch(dummyUrl, {
            signal: abortController.signal,
          });

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const responseData: IAirportDistance = await response.json();
          setData(responseData);
          setLoading(false);
        } catch (error: unknown) {
          if (!abortController.signal.aborted) {
            setError({ message: (error as AirportDistanceError).message });
            setLoading(false);
          }
        }
      };

      fetchData();

      return () => {
        abortController.abort();
      };
    }
  }, [showResults, from, to]);

  //value is only recalculated when the data dependency changes
  const cachedData = useMemo(() => data, [data]);

  return { data: cachedData, loading, error };
};

export default useAirportDistance;
