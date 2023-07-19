export interface AirportDistanceError {
    message: string;
}

export interface IAirportDistance {
    // Define the structure of the data object
    // based on the response from the API
    // Adjust the types according to the actual response structure
    // This is just a placeholder example
    distance: number;
    duration: number;
}

export interface IError {
    message: string
  }