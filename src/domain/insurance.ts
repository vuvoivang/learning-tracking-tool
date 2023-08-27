export interface Insurance {
  name: string;
  product_name: string;
  product_logo: string;
  insurance_type: number;
  min_age: number;
  max_age: number;
  insurance_info: string;
  insurance_benefit: string;
  insurance_term: string;
  form_sources: Array<string>;
  allowed_audience_ids: Array<string>;
  state: string;
}
