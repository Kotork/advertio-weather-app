export interface ICity {
  [key: string]: GeoPosition;
}

interface GeoPosition {
  lat: number;
  lon: number;
}

export interface ISelectedCity {
  name: string;
  lat: number | null;
  lon: number | null;
}