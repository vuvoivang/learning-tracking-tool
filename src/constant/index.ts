export const IS_DEVELOPMENT =
  document.location.href.indexOf('localhost') > -1 ||
  document.location.href.indexOf('dev') > -1;
export const IS_PRODUCTION = import.meta.env.VITE_ENV === 'production';

export const DOMAIN_API_URL = import.meta.env.VITE_API_URL;

export enum AppType {
  MOBILE = 'MOBILE',
  MINIAPP = 'MINIAPP',
  WEBSITE = 'WEBSITE',
}

export interface ResponseData<T> {
  msg: string;
  code: number;
  data: T;
  success: boolean;
  total?: number;
  not_empty?: boolean;
  empty?: boolean;
}

export enum ApiStatus {
  SUCCESS = 0,
  UNAUTHORIZED = 403,
}

export enum StateStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const MAP_STATE_STATUS = [
  [StateStatus.ACTIVE, 'Active'],
  [StateStatus.INACTIVE, 'Inactive'],
];

export const MAP_STATE_STATUS_LIST = [
  [true, 'Active'],
  [false, 'Inactive'],
];

export enum PRODUCT_TYPE_ID {
  UNKNOWN = 'UNKNOWN',
  CARD = 'CARD',
  LOAN = 'LOAN',
  INSURANCE = 'INSURANCE',
  SECURITIES = 'SECURITIES',
  BANK_ACCOUNT = 'BANK_ACCOUNT',
}

export const MAP_PRODUCT_TYPE_ID = {
  [PRODUCT_TYPE_ID.CARD]: 'Card',
  [PRODUCT_TYPE_ID.LOAN]: 'Loan',
  [PRODUCT_TYPE_ID.INSURANCE]: 'Insurance',
  [PRODUCT_TYPE_ID.SECURITIES]: 'Security',
};

export const DEFAULT_PAGE_SIZE = 5;

export const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export enum ICON_TYPE_ID {
  UNKNOWN = 'UNKNOWN',
  ICON_SEARCH_PRODUCT = 'ICON_SEARCH_PRODUCT',
  ICON_INTEREST_RATE = 'ICON_INTEREST_RATE',
  ICON_EXCHANGE_RATE = 'ICON_EXCHANGE_RATE',
  ICON_ATM = 'ICON_ATM',
  ICON_LOAN = 'ICON_LOAN',
  ICON_INSURANCE = 'ICON_INSURANCE',
  LINK_LOAN = 'LINK_LOAN',
  ICON_PARTNER_RATING = 'ICON_PARTNER_RATING',
  ICON_GOLD_PRICE = 'ICON_GOLD_PRICE',
  ICON_LOAN_PRODUCT = 'ICON_LOAN_PRODUCT',
  ICON_ZONE_SHORTCUT = 'ICON_ZONE_SHORTCUT',
  ICON_ZONE_SUBPAGE = 'ICON_ZONE_SUBPAGE',
}

export enum LOGO_TYPE {
  UNKNOWN = 'UNKNOWN',
  CARD_CREDIT = 'CARD_CREDIT',
  CARD_DOMESTIC = 'CARD_DOMESTIC',
  LOAN_FAST = 'LOAN_FAST',
  LOAN_CONSUMER = 'LOAN_CONSUMER',
  LOAN_BUSINESS = 'LOAN_BUSINESS',
  INSURANCE = 'INSURANCE',
}
