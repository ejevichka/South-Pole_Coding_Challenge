import { Flight, FlightAction } from '~/lib/reducers/types'

export interface AirportDistanceError {
    message: string;
    code?: number;
}

export interface AirportDistanceContextProps {
    flights: Flight[];
}

export interface AirportDistanceProviderProps {
    children: React.ReactNode;
}

export interface FlightDispatchContextProps {
    dispatch: React.Dispatch<FlightAction>;
  }