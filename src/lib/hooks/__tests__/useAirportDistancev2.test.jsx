import { renderHook, act } from '@testing-library/react';
import useAirportDistance from '~/lib/hooks/useAirportDistance';
import fetchMock from 'jest-fetch-mock';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});


describe("useAirportDistance", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should return data after fetch", async () => {
    const stubbedFetchUrl = "api/countriesUrl-mocked";
    const stubbedCountries = '1';

    fetchMock.mockResponseOnce(JSON.stringify(stubbedCountries));

    const { result } = renderHook(() =>
      useAirportDistance(stubbedFetchUrl, '', '', true)
    );

    // Advance timers by 1 second
    jest.advanceTimersByTime(1000);

    await act(async () => {
      await expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    expect(result.current).toEqual({
      loading: false,
      data: stubbedCountries,
      error: null,
    });
  });

  it("should return null after fetch", async () => {
    const stubbedFetchUrl = "api/countriesUrl-mocked";
    const stubbedCountries = '1';

    fetchMock.mockResponseOnce(JSON.stringify(stubbedCountries));

    const { result } = renderHook(() =>
      useAirportDistance(stubbedFetchUrl, '', '', false)
    );

    // Advance timers by 1 second
    jest.advanceTimersByTime(1000);

    await act(async () => {
      await expect(fetchMock).toHaveBeenCalledTimes(0);
    });

    expect(result.current).toEqual({
      loading: false,
      data: null,
      error: null,
    });
  });
});
