export default interface dataType {
  productName?: string;
  descriptionShort?: string;
  photo?: string;
  price?: number | string;
}

export interface modalType extends dataType {
  open: boolean;
}
