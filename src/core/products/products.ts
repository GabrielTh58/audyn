export interface ProductImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: ProductImageSet;
  second: ProductImageSet;
  third: ProductImageSet;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  image: ProductImageSet;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  quantity?: number;
  image: ProductImageSet;
  category: string;
  categoryImage: ProductImageSet;
  new: boolean;
  price: number;
  rating: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery?: Gallery;
  others: RelatedProduct[];
}
