import { PRODUCT_TYPE_ID } from '../constant';

export interface PromoteProduct {
  id: number;
  name: string;
  description: string;
  promote_index: number;
  product_type_id: PRODUCT_TYPE_ID;
  product_id: number;
  image_url: string;
  redirect_url: string;
}
