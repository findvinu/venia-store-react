export interface ProductProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  category: string;
  price: number;
  rating?: {
    count: number;
    rate: number;
  };
}
