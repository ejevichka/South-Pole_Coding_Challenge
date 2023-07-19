import { useEffect } from 'react';
import { Option } from '~/lib/components/samples/types'
import { IError } from '~/lib/hooks/types/useAirportDistance.types'

interface IFetchOptionsProps {
  inputValue: string; 
  setError: (error: null | string)=> void, 
  setOptions: (arg: Option[])=> void
  setIsLoading: (arg: boolean) => void 
}

export const useFetchOptions = ({ inputValue, setError, setOptions, setIsLoading }: IFetchOptionsProps) => {
    useEffect(() => {
      let debounceTimer: NodeJS.Timeout;
  
      const fetchOptions = async () => {
        setIsLoading(true);
        setError(null);
  
        try {
           //performed local api endpoint to request data
          const response = await fetch(`http://localhost:3000/api/sitaoptions.api?search=${encodeURIComponent(inputValue)}`);
          if (response.status === 404) {
            throw new Error('Options not found');
          }
          const data = await response.json();
          setOptions(data.options);
        } catch (error) {
          setError((error as IError).message);
          setOptions([]);
        }
  
        setIsLoading(false);
      };
      const debounceFetchOptions = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => fetchOptions(), 300);
      };
  
      if (inputValue) {
        debounceFetchOptions();
      } else {
        setOptions([]);
      }
  
      return () => {
        clearTimeout(debounceTimer);
      };
    }, [inputValue, setError, setOptions, setIsLoading]);
  };