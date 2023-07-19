export interface Airport {
    value: string;
    label: string;
}
  
export interface Flight {
    id?: string;
    From: Airport | null;
    To: Airport | null;
    passengers: number;
    roundTrip: string;
    emission: number;
    distance: number;
}
  
export type FlightAction =
    | { type: 'ADD_FLIGHT'; payload: Flight }
    | { type: 'REMOVE_FLIGHT'; id: string | undefined }
    | { type: 'SET_EMISSION_COUNT'; id: string; emissionCount: number };