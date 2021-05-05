import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PType: string; // PropertyType
  BHK: number;
  FType: string; // FurnitureType
  Price: number;
  BuiltArea: number;
  CarpetArea?: number;
  Address: string;
  Address2?: string;
  City: string;
  FloorNo?: string;
  TotalFloor?: string;
  RTM: number; // ReadyToMove
  AOP?: string; // AgeOfProperty
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn: string;
  PostedBy: number;
}
