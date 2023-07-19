import { renderHook, act } from '@testing-library/react';

import { useFetchOptions } from '~/lib/hooks/useOptions'
import fetchMock from 'jest-fetch-mock';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('useFetchOptions', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('fetches options and updates state correctly', async () => {
    const inputValue = 'example';
    const setError = jest.fn();
    const setOptions = jest.fn();
    const setIsLoading = jest.fn();
    const stubbedCountries = '1';

    fetchMock.mockResponseOnce(JSON.stringify(stubbedCountries));

    renderHook(() =>
      useFetchOptions({ inputValue, setError, setOptions, setIsLoading })
    );
    // Advance timers by 1 second
    jest.advanceTimersByTime(2000);

    await act(async () => {
      await expect(setIsLoading).toHaveBeenCalledTimes(1);
      await expect(setError).toHaveBeenCalledTimes(1);
      await expect(fetchMock).toHaveBeenCalledTimes(1);
      await expect(setOptions).toHaveBeenCalledTimes(1);
    });
  });
});


