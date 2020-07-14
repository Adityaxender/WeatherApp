export enum LocationType { Geolocation }

export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Location_data {
  type: LocationType;
  value: Coordinates;
}
