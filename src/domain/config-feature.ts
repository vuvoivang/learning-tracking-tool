import { AppType, PRODUCT_TYPE_ID, StateStatus } from '../constant';

export interface ConfigFeature {
  id: number;
  name: string;
  description: string;
  form_source: string;
  partner_id: number;
  redirect_url: string;
  miniapp_id: string;
  query_params: string;
  logo_homepage_url: string;
  is_off: boolean;
  is_homepage_logo: boolean;
  is_landing_logo: boolean;
  is_new_template: boolean;
  logo_index: number;
  product_type_id: PRODUCT_TYPE_ID;
  app_type: AppType;
  allowed_audience_ids: [number];
  unallowed_audience_ids: [number];
  bank_id: number;
  state: StateStatus;
  updated_at: number;
}
