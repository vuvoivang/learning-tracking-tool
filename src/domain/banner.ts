import { StateStatus } from '~/src/constant';

export interface Banner {
  banner_type: number;
  banner_index: number;
  title: string;
  description: string;
  image_url: string;
  app_url: string;
  product_id: number;
  product_type_id: number;
  partner_id: number;
  show_by_audiences: Array<string>;
  state: StateStatus;
}
