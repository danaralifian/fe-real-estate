import { TypedObject } from "@portabletext/types";

export interface Property {
  _id: string;
  title: string;
  description: TypedObject[];
  price: number;
  location: string;
  imageUrl: string;
  slug: string;
}
