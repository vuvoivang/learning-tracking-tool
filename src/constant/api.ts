import { DOMAIN_API_URL } from '.';

export const API_UPLOAD_IMAGE = `${DOMAIN_API_URL}/upload/image_url`;
export const API_UPLOAD_IMAGE_THUMB = `${DOMAIN_API_URL}/upload/thumb_url`;
export const API_UPLOAD_IMAGE_PROMOTION = `${DOMAIN_API_URL}/upload/promotion_image_url`;

export const BANK = {
  GET: '/banks',
  POST: '/banks',
  PUT: '/banks',
};

export const CARD = {
  GET: '/cards',
  POST: '/cards',
  PUT: '/cards',
};

export const LOAN = {
  GET: '/loan',
  POST: '/loan',
  PUT: '/loan',
};

export const INSURANCE = {
  GET: '/insurances',
  POST: '/insurances',
  PUT: '/insurances',
};

export const BANNER = {
  GET: '/banners',
  POST: '/banners',
  PUT: '/banners',
};

export const PARTNER_LOGOS = {
  GET: '/logo-setup',
  POST: '/logo-setup',
  PUT: '/logo-setup',
};

export const HOT_PRODUCTS = {
  GET: '/hot-product',
  POST: '/hot-product',
  PUT: '/hot-product',
};

export const PROMOTE_PRODUCT = {
  GET: '/promote-product',
  POST: '/promote-product',
  PUT: '/promote-product',
};

export const CONFIG_FEATURES = {
  GET: '/config-feature',
  POST: '/config-feature',
  PUT: '/config-feature',
};

export const WEB_ARTICLE = {
  GET: {
    ARTICLES: '/web-article',
  },
  POST: {
    CREATE_ARTICLE: '/web-article',
  },
  PUT: {
    UPDATE_ARTICLE: '/web-article',
  },
};

export const WEB_CATEGORY = {
  GET: {
    CATEGORIES: '/web-article-category',
  },
  POST: {
    CREATE_CATEGORY: '/web-article-category',
  },
  PUT: {
    UPDATE_CATEGORY: '/web-article-category',
  },
};

export const MOBILE_REPORT = {
  GET: {
    INSURANCE: '/report/insurance/lead',
    EKYC: '/report/ekyc/ekyc',
  },
};

export const PARTNER = {
  GET: {
    PARTNER: '/partners',
  },
};

export const AUTH = {
  GET: {
    LOGOUT: '/auth/logout',
  },
  POST: {
    SESSION: '/auth/session',
    LOGIN: '/auth/login',
  },
};

export const CONSENT = {
  GET: {
    WITHDRAW_LIST: '/consent/withdraw-request/list',
  },
  POST: {
    WITHDRAW_APPROVE: '/consent/withdraw-request/approve',
  },
};

const API = {
  AUTH,
  WEB_ARTICLE,
  WEB_CATEGORY,
  MOBILE_REPORT,
  PARTNER,
  CARD,
  LOAN,
  INSURANCE,
  BANK,
  CONSENT,
  BANNER,
  PARTNER_LOGOS,
  HOT_PRODUCTS,
  PROMOTE_PRODUCT,
  CONFIG_FEATURES,
};

export default API;
