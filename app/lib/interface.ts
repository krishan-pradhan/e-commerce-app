export interface simplifiedProduct {
    _id: string;
    name: string;
    slug: string;
    imageUrl: string;
    price: number;
    categoryName: string;
}

export type fullProduct = {
    _id: string;
    name: string;
    slug: string;
    images: any;
    price: number;
    categoryName: string;
    description: string,
    price_id: string,
    quantity: number | any
    imageUrl: string;
}