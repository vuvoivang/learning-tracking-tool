import { HOT_PRODUCTS } from './api';
// TODO: Add more routes here
const ROUTE = {
  LOGIN: '/login',
  CARD: {
    LIST: '/problem/list',
    CREATE: '/problem/create',
    UPDATE: '/problem/update',
  },
  BANNER: {
    LIST: '/banners/list',
    CREATE: '/banners/create',
    UPDATE: '/banners/update',
  },
  PARTNER_LOGO: {
    LIST: '/partner-logos/list',
    CREATE: '/partner-logos/create',
    UPDATE: '/partner-logos/update',
  },
  HOT_PRODUCT: {
    LIST: '/hot-products/list',
    CREATE: '/hot-products/create',
    UPDATE: '/hot-products/update',
  },
  PROMOTE_PRODUCT: {
    LIST: '/promote-products/list',
    CREATE: '/promote-products/create',
    UPDATE: '/promote-products/update',
  },
  CONFIG_FEATURE: {
    LIST: '/config-features/list',
    CREATE: '/config-features/create',
    UPDATE: '/config-features/update',
  },
  CONSENT: {
    WITHDRAW_REQUEST_LIST: '/consent/withdraw-request/list',
  },
};

export default ROUTE;
