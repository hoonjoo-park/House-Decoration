import axios from 'axios';

export const API = 'https://cdn.ggumim.co.kr/test/image_product_link.json';

export const API_DATA = axios.get(API);

export const PRODUCT_WIDTH = 6;
export const PRODUCT_MARGIN = 1;
export const IMAGE_WIDTH = 680;
export const IMAGE_HEIGHT = 600;

export const TOOLTIP = {
  width: 1.3,
  height: 1.3,
};

export type ProductType = {
  discountRate: number;
  imageUrl: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceDiscount: number;
  priceOriginal: number;
  productId: number;
  productName: string;
};

export type ProductIdType = {
  productId: number;
};

export type StateProps = {
  currentProduct: number;
};

export type setStateProps = {
  setCurrentProduct: () => void;
};

export interface ApiInterface {
  apiData: {
    id: number;
    imageUrl: string;
    productList: ProductType[];
  };
}
