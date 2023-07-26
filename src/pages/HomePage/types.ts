import { FacilityTypes } from "../../components/atoms/FacilityType";

export enum ViewsType {
  LIST_VIEW = "listView",
  MAP_VIEW = "mapView",
}

export interface IFacility {
  city: string;
  ZIPCode: string;
  address: string;
  purpose: FacilityTypes;
  email: string;
  password?: string;
  description: string;
  isOccupied: boolean;
  occupiedTime: Date;
  googlePlusCode?: string;
  coordinates: {
    latitude: Number;
    longitude: Number;
  };
  active: boolean;
  _id: string;
  __v: number;
}
