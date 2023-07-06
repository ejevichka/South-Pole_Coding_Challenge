import { useEffect, useState, useMemo } from 'react';

interface AirportDistance {
  // Define the structure of the data object
  // based on the response from the API
  // Adjust the types according to the actual response structure
  // This is just a placeholder example
  distance: number;
  duration: number;
}

interface AirportDistanceError {
  message: string;
}

const useAirportDistance = (
  url: string,
  from: string,
  to: string,
  showResults: boolean
): {
  data: any | null;
  loading: boolean;
  error: AirportDistanceError | null;
} => {
  const [data, setData] = useState<AirportDistance | null>(null);
  const [error, setError] = useState<AirportDistanceError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (showResults) {
      const abortController = new AbortController();

      const fetchData = async (): Promise<void> => {
        try {
          //const urlWithParams = `${url}/${from}/${to}`;
          const dummy = 'http://localhost:3000/api/sitaopen.api'
          const response = await fetch(dummy, {
            signal: abortController.signal,
          });
          console.log('response', response)

          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const responseData: AirportDistance = await response.json();
          setData(responseData);
          setLoading(false);
        } catch (error: any) {
          if (!abortController.signal.aborted) {
            setError({ message: error.message as string });
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

  const cachedData = useMemo(() => data, [data]);

  return { data: cachedData, loading, error };
};

export default useAirportDistance;
