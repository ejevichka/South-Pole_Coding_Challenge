export interface Airport {
    value: string;
    label: string;
  }
  
export interface FormState {
    From: Airport | null;
    To: Airport | null;
    passengers: number;
    roundTrip: string
  }
