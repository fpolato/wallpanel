import { Item } from "./item";

export interface Location {
  id: string;
  name: string;
  description?: string;
  locations?: Location[]
  items?: Item[]
}
