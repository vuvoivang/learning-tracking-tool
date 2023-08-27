import { lazy } from 'react';

import {
  DownloadOutlined,
  UserOutlined,
  UserDeleteOutlined,
  FileImageOutlined,
  PictureOutlined,
  BankOutlined,
  ChromeOutlined,
  QqOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

import { ROLE } from './role';
import ROUTE from '~/src/constant/routes';
import WithdrawRequest from '../ui/modules/mobile-withdraw-request/containers/WithdrawRequest';

const ViewWebCard = lazy(
  () => import('../ui/modules/web-card/containers/ViewListCard')
);

const CreateUpdateWebCard = lazy(
  () => import('../ui/modules/web-card/containers/CreateUpdateCard')
);

const ViewWebArticle = lazy(
  () => import('../ui/modules/web-article/containers/ViewWebArticle')
);

const ViewBanner = lazy(
  () => import('../ui/modules/mobile-banner/containers/ViewListBanner')
);

const CreateUpdateBanner = lazy(
  () => import('../ui/modules/mobile-banner/containers/CreateUpdateBanner')
);

const ViewPartnerLogos = lazy(
  () =>
    import('../ui/modules/mobile-partner-logo/containers/ViewListPartnerLogos')
);

const CreateUpdatePartnerLogos = lazy(
  () =>
    import(
      '../ui/modules/mobile-partner-logo/containers/CreateUpdatePartnerLogos'
    )
);

const ViewHotProducts = lazy(
  () =>
    import('../ui/modules/mobile-hot-product/containers/ViewListHotProducts')
);

const CreateUpdateHotProducts = lazy(
  () =>
    import(
      '../ui/modules/mobile-hot-product/containers/CreateUpdateHotProducts'
    )
);

const ViewPromoteProducts = lazy(
  () =>
    import(
      '../ui/modules/mobile-promote-product/containers/ViewListPromoteProduct'
    )
);

const CreateUpdatePromoteProduct = lazy(
  () =>
    import(
      '../ui/modules/mobile-promote-product/containers/CreateUpdatePromoteProduct'
    )
);

const ViewConfigFeatures = lazy(
  () =>
    import(
      '../ui/modules/mobile-config-feature/containers/ViewListConfigFeatures'
    )
);

const CreateUpdateConfigFeatures = lazy(
  () =>
    import(
      '../ui/modules/mobile-config-feature/containers/CreateUpdateConfigFeatures'
    )
);

const CreateWebArticle = lazy(
  () => import('../ui/modules/web-article/containers/CreateWebArticle')
);

const UpdateWebArticle = lazy(
  () => import('../ui/modules/web-article/containers/CreateWebArticle')
);

const ViewWebCategory = lazy(
  () => import('../ui/modules/web-category/containers/ViewWebCategory')
);

const CreateWebCategory = lazy(
  () => import('../ui/modules/web-category/containers/CreateWebCategory')
);

const UpdateWebCategory = lazy(
  () => import('../ui/modules/web-category/containers/CreateWebCategory')
);

const MobileReportInsurance = lazy(
  () =>
    import(
      '../ui/modules/mobile-report-insurance/containers/MobileReportInsurance'
    )
);

const MobileReportEkyc = lazy(
  () => import('../ui/modules/mobile-report-ekyc/containers/MobileReportEkyc')
);

const Login = lazy(() => import('../ui/modules/login/containers/Login'));

export const MAIN_ROUTES = [
  {
    path: '/login',
    name: 'login',
    element: Login,
  },
  {
    path: ROUTE.CARD.LIST,
    name: 'webCards',
    element: ViewWebCard,
  },
  {
    path: `${ROUTE.CARD.CREATE}`,
    name: 'webCardCreate',
    element: CreateUpdateWebCard,
  },
  {
    path: `${ROUTE.CARD.UPDATE}/:id`,
    name: 'webCardUpdate',
    element: CreateUpdateWebCard,
  },
  {
    path: '/web-article/list',
    name: 'webArticles',
    element: ViewWebArticle,
  },
  {
    path: '/web-article/create',
    name: 'createWebArticle',
    element: CreateWebArticle,
  },
  {
    path: '/web-article/update',
    name: 'updateWebArticle',
    element: UpdateWebArticle,
  },
  {
    path: '/web-category/list',
    name: 'webCategories',
    element: ViewWebCategory,
  },
  {
    path: '/web-category/create',
    name: 'createWebCategory',
    element: CreateWebCategory,
  },
  {
    path: '/web-category/update',
    name: 'updateWebCategory',
    element: UpdateWebCategory,
  },
  {
    path: '/report/insurance',
    name: 'mobileReportInsurance',
    element: MobileReportInsurance,
  },
  {
    path: '/report/ekyc',
    name: 'mobileReportEkyc',
    element: MobileReportEkyc,
  },
  {
    path: ROUTE.CONSENT.WITHDRAW_REQUEST_LIST,
    name: 'withdrawRequest',
    element: WithdrawRequest,
  },
  {
    path: ROUTE.BANNER.LIST,
    name: 'banners',
    element: ViewBanner,
  },
  {
    path: `${ROUTE.BANNER.CREATE}`,
    name: 'bannerCreate',
    element: CreateUpdateBanner,
  },
  {
    path: `${ROUTE.BANNER.UPDATE}/:id/:type`,
    name: 'bannerUpdate',
    element: CreateUpdateBanner,
  },
  {
    path: ROUTE.PARTNER_LOGO.LIST,
    name: 'partnerLogos',
    element: ViewPartnerLogos,
  },
  {
    path: `${ROUTE.PARTNER_LOGO.CREATE}`,
    name: 'partnerLogoCreate',
    element: CreateUpdatePartnerLogos,
  },
  {
    path: `${ROUTE.PARTNER_LOGO.UPDATE}/:id`,
    name: 'partnerLogoUpdate',
    element: CreateUpdatePartnerLogos,
  },
  {
    path: ROUTE.HOT_PRODUCT.LIST,
    name: 'hotProducts',
    element: ViewHotProducts,
  },
  {
    path: `${ROUTE.HOT_PRODUCT.CREATE}`,
    name: 'hotProductCreate',
    element: CreateUpdateHotProducts,
  },
  {
    path: `${ROUTE.HOT_PRODUCT.UPDATE}/:id`,
    name: 'hotProductUpdate',
    element: CreateUpdateHotProducts,
  },
  {
    path: ROUTE.PROMOTE_PRODUCT.LIST,
    name: 'promoteProducts',
    element: ViewPromoteProducts,
  },
  {
    path: `${ROUTE.PROMOTE_PRODUCT.CREATE}`,
    name: 'promoteProductCreate',
    element: CreateUpdatePromoteProduct,
  },
  {
    path: `${ROUTE.PROMOTE_PRODUCT.UPDATE}/:id`,
    name: 'promoteProductUpdate',
    element: CreateUpdatePromoteProduct,
  },
  {
    path: ROUTE.CONFIG_FEATURE.LIST,
    name: 'configFeatures',
    element: ViewConfigFeatures,
  },
  {
    path: `${ROUTE.CONFIG_FEATURE.CREATE}`,
    name: 'configFeatureCreate',
    element: CreateUpdateConfigFeatures,
  },
  {
    path: `${ROUTE.CONFIG_FEATURE.UPDATE}/:id`,
    name: 'configFeatureUpdate',
    element: CreateUpdateConfigFeatures,
  },
];

export const mobileMenus = [
  // {
  //   id: "bank",
  //   name: "Ngân hàng",
  //   icon: DownloadOutlined,
  //   route: "/admin/banks/list",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "partner",
  //   name: "Đối tác",
  //   icon: DownloadOutlined,
  //   route: "/admin/partners/list",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "campaign",
  //   name: "Chiến dịch",
  //   icon: DownloadOutlined,
  //   route: "/admin/campaigns/list",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: 'product',
  //   name: 'Products',
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: 'product-card',
  //   name: 'Card',
  //   icon: DownloadOutlined,
  //   route: '/admin/cards/list',
  //   menuParentId: 'product',
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "product-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/loans/list",
  //   menuParentId: "product",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "product-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/insurances/list",
  //   menuParentId: "product",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "product-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/securities",
  //   menuParentId: "product",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-product",
  //   name: "Active Products",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-cards/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-loans/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-insurances/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-securities/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "official-account",
  //   name: "Official Accounts",
  //   icon: DownloadOutlined,
  //   route: "/admin/official-accounts/list",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead",
  //   name: "Lead",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/leads/card/new",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/leads/list",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead-verify",
  //   name: "Verify Lead",
  //   icon: DownloadOutlined,
  //   route: "/admin/filter/leads",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  {
    id: 'article-parent',
    name: 'Articles',
    icon: DownloadOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'article',
    name: 'Articles',
    icon: DownloadOutlined,
    route: '/admin/oa-articles/list',
    menuParentId: 'article-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'consent-parent',
    name: 'Consents',
    icon: UserOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'withdraw-request',
    name: 'Withdrawals',
    icon: UserDeleteOutlined,
    route: `/admin${ROUTE.CONSENT.WITHDRAW_REQUEST_LIST}`,
    menuParentId: 'consent-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'report',
    name: 'Report',
    icon: DownloadOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  },
  // {
  //   id: "report-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/cards",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/loans",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  {
    id: 'report-insurance',
    name: 'Insurance',
    icon: DownloadOutlined,
    route: '/admin/report/insurance',
    menuParentId: 'report',
    role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  },
  {
    id: 'report-ekyc',
    name: 'EKYC',
    icon: DownloadOutlined,
    route: '/admin/report/ekyc',
    menuParentId: 'report',
    role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  },
  // {
  //   id: "report-loan-refill",
  //   name: "Loan Refill",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/loan-refill",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-feedback",
  //   name: "Feedback",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/feedback",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-ec-lead-status",
  //   name: "EC Lead Status",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/upload-ec-status",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/securities",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "message",
  //   name: "Tin nhắn",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-list",
  //   name: "Tin nhắn",
  //   icon: DownloadOutlined,
  //   route: "/admin/messages/list",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-create",
  //   name: "Soạn tin nhắn",
  //   icon: DownloadOutlined,
  //   route: "/admin/messages/new",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-send",
  //   name: "Gửi tin nhắn",
  //   icon: DownloadOutlined,
  //   route: "/admin/messages/send",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-history",
  //   name: "Lịch sử",
  //   icon: DownloadOutlined,
  //   route: "/admin/message-tracks-details-summary/list",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "broadcast",
  //   name: "Broadcast",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "broadcast-list",
  //   name: "Broadcast",
  //   icon: DownloadOutlined,
  //   route: "/admin/broadcast/list",
  //   menuParentId: "broadcast",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "broadcast-create",
  //   name: "Tạo broadcast",
  //   icon: DownloadOutlined,
  //   route: "/admin/broadcast/new",
  //   menuParentId: "broadcast",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "comment-approval",
  //   name: "Duyệt bình luận",
  //   icon: DownloadOutlined,
  //   route: "/admin/review/list",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  {
    id: 'banner-parent',
    name: 'Banners',
    icon: FileImageOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'banner',
    name: 'Banners',
    icon: FileImageOutlined,
    route: `/admin${ROUTE.BANNER.LIST}`,
    menuParentId: 'banner-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'logos-parent',
    name: 'Logos',
    icon: PictureOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'partnerLogos',
    name: 'Partner Logos',
    icon: BankOutlined,
    route: `/admin${ROUTE.PARTNER_LOGO.LIST}`,
    menuParentId: 'logos-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'products-parent',
    name: 'Products',
    icon: ChromeOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'hotProducts',
    name: 'Hot Products',
    icon: QqOutlined,
    route: `/admin${ROUTE.HOT_PRODUCT.LIST}`,
    menuParentId: 'products-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'promoteProducts',
    name: 'Promote Products',
    icon: QqOutlined,
    route: `/admin${ROUTE.PROMOTE_PRODUCT.LIST}`,
    menuParentId: 'products-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'configs-parent',
    name: 'Configs',
    icon: SettingOutlined,
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'configFeatures',
    name: 'Config features',
    icon: AppstoreOutlined,
    route: `/admin${ROUTE.CONFIG_FEATURE.LIST}`,
    menuParentId: 'configs-parent',
    role: [ROLE.Admin, ROLE.OP, ROLE.Registered, ROLE.Setup, ROLE.CustomSetup],
  },
  // {
  //   id: "banner-visible",
  //   name: "Banner visible",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/visible",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-welcome",
  //   name: "Welcome banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/welcome",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-featured",
  //   name: "Featured banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/featured",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-masthead",
  //   name: "Masthead banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/masthead",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-loanform",
  //   name: "Loanform banner step 1",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/loanform",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-miniapp",
  //   name: "Miniapp banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/miniapp",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-profile",
  //   name: "Profile banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/profile",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-game-zone",
  //   name: "Game banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/game-zone-banner/list",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "tracking-pixel-banners",
  //   name: "Tracking Pixel Banners",
  //   icon: DownloadOutlined,
  //   route: "/admin/tracking-pixel-banners/list",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "logos",
  //   name: "Homepage logos",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/card-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/insurance-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/securities-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "mini-app",
  //   name: "Mini App",
  //   icon: DownloadOutlined,
  //   route: "/admin/linked-app-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "config-theme",
  //   name: "ConfigTheme",
  //   icon: DownloadOutlined,
  //   route: "/admin/config-theme/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "delete-loan",
  //   name: "Delete loan",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP],
  // },
  // {
  //   id: "delete-lead-submitted",
  //   name: "Lead submitted",
  //   icon: DownloadOutlined,
  //   route: "/admin/test-lead/list",
  //   menuParentId: "delete-loan",
  //   role: [ROLE.Admin, ROLE.OP],
  // },
  // {
  //   id: "delete-loan-refill",
  //   name: "Loan refill",
  //   icon: DownloadOutlined,
  //   route: "/admin/test-loan-refill/list",
  //   menuParentId: "delete-loan",
  //   role: [ROLE.Admin, ROLE.OP],
  // },
  // {
  //   id: "income-report",
  //   name: "Hồ sơ thu nhập",
  //   icon: DownloadOutlined,
  //   route: "/admin/income-report",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "accountant",
  //   name: "Kế toán",
  //   icon: DownloadOutlined,
  //   route: "/admin/accountant-report",
  //   role: [ROLE.Admin, ROLE.Accountant],
  // },
  // {
  //   id: "product-limit",
  //   name: "Product limit",
  //   icon: DownloadOutlined,
  //   route: "/admin/product-limits/list",
  //   role: [ROLE.Admin, ROLE.Setup],
  // },
  // {
  //   id: "abtesting-phase2",
  //   name: "ABTesting",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "flows",
  //   name: "Services",
  //   icon: DownloadOutlined,
  //   route: "/admin/flows/list",
  //   menuParentId: "abtesting-phase2",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "flow-group",
  //   name: "User Flow Group",
  //   icon: DownloadOutlined,
  //   route: "/admin/user-flow-group/list",
  //   menuParentId: "abtesting-phase2",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "greetings",
  //   name: "Greetings",
  //   icon: DownloadOutlined,
  //   route: "/admin/greetings",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "oa-log",
  //   name: "OA log",
  //   icon: DownloadOutlined,
  //   route: "/admin/oa/log",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "configs",
  //   name: "Hard Code",
  //   icon: DownloadOutlined,
  //   route: "/admin/configs",
  //   menuParentId: "delete-loan",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "feature-configs",
  //   name: "Feature Configs",
  //   icon: DownloadOutlined,
  //   route: "/admin/config-feature/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin],
  // },
  {
    id: 'category',
    name: 'Categories',
    icon: DownloadOutlined,
    route: '/admin/category/list',
    menuParentId: 'article-parent',
    role: [ROLE.Admin, ROLE.OP],
  },
  // {
  //   id: "hold-lead",
  //   name: "Hold lead",
  //   icon: DownloadOutlined,
  //   route: "/admin/hold-lead-logs/list",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin],
  // },
];

export const websiteMenus = [
  // {
  //   id: "bank",
  //   name: "Ngân hàng",
  //   icon: DownloadOutlined,
  //   route: "/admin/banks/list",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "partner",
  //   name: "Đối tác",
  //   icon: DownloadOutlined,
  //   route: "/admin/partners/list",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "campaign",
  //   name: "Chiến dịch",
  //   icon: DownloadOutlined,
  //   route: "/admin/campaigns/list",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  {
    id: 'product',
    name: 'Products',
    icon: DownloadOutlined,
    role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  },
  {
    id: 'product-card',
    name: 'Card',
    icon: DownloadOutlined,
    route: '/admin/web-cards/list',
    menuParentId: 'product',
    role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  },
  // {
  //   id: 'product-loan',
  //   name: 'Loan',
  //   icon: DownloadOutlined,
  //   route: '/admin/loans/list',
  //   menuParentId: 'product',
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "product-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/insurances/list",
  //   menuParentId: "product",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "product-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/securities",
  //   menuParentId: "product",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-product",
  //   name: "Active Products",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-cards/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-loans/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-insurances/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "active-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/active-products-securities/list",
  //   menuParentId: "active-product",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "official-account",
  //   name: "Official Accounts",
  //   icon: DownloadOutlined,
  //   route: "/admin/official-accounts/list",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead",
  //   name: "Lead",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/leads/card/new",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/leads/list",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  // {
  //   id: "lead-verify",
  //   name: "Verify Lead",
  //   icon: DownloadOutlined,
  //   route: "/admin/filter/leads",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.Collaborator, ROLE.CustomSetup],
  // },
  {
    id: 'web-article-parent',
    name: 'Articles',
    icon: DownloadOutlined,
    role: [ROLE.Admin, ROLE.OP],
  },
  {
    id: 'web-category',
    name: 'Categories',
    icon: DownloadOutlined,
    route: '/admin/web-category/list',
    menuParentId: 'web-article-parent',
    role: [ROLE.Admin, ROLE.OP],
  },
  {
    id: 'web-article',
    name: 'Articles',
    icon: DownloadOutlined,
    route: '/admin/web-article/list',
    menuParentId: 'web-article-parent',
    role: [ROLE.Admin, ROLE.OP],
  },
  // {
  //   id: "report",
  //   name: "Report",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/cards",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/loans",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/insurances",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-loan-refill",
  //   name: "Loan Refill",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/loan-refill",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-feedback",
  //   name: "Feedback",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/feedback",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-ec-lead-status",
  //   name: "EC Lead Status",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/upload-ec-status",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "report-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/report/securities",
  //   menuParentId: "report",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.KeyAccountManager, ROLE.CustomSetup],
  // },
  // {
  //   id: "message",
  //   name: "Tin nhắn",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-list",
  //   name: "Tin nhắn",
  //   icon: DownloadOutlined,
  //   route: "/admin/messages/list",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-create",
  //   name: "Soạn tin nhắn",
  //   icon: DownloadOutlined,
  //   route: "/admin/messages/new",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-send",
  //   name: "Gửi tin nhắn",
  //   icon: DownloadOutlined,
  //   route: "/admin/messages/send",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "message-history",
  //   name: "Lịch sử",
  //   icon: DownloadOutlined,
  //   route: "/admin/message-tracks-details-summary/list",
  //   menuParentId: "message",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "broadcast",
  //   name: "Broadcast",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "broadcast-list",
  //   name: "Broadcast",
  //   icon: DownloadOutlined,
  //   route: "/admin/broadcast/list",
  //   menuParentId: "broadcast",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "broadcast-create",
  //   name: "Tạo broadcast",
  //   icon: DownloadOutlined,
  //   route: "/admin/broadcast/new",
  //   menuParentId: "broadcast",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "comment-approval",
  //   name: "Duyệt bình luận",
  //   icon: DownloadOutlined,
  //   route: "/admin/review/list",
  //   role: [ROLE.Admin, ROLE.OP, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner",
  //   name: "Banner",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-visible",
  //   name: "Banner visible",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/visible",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-welcome",
  //   name: "Welcome banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/welcome",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-featured",
  //   name: "Featured banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/featured",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-masthead",
  //   name: "Masthead banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/masthead",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-loanform",
  //   name: "Loanform banner step 1",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/loanform",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-miniapp",
  //   name: "Miniapp banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/miniapp",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-profile",
  //   name: "Profile banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/banner/profile",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "banner-game-zone",
  //   name: "Game banner",
  //   icon: DownloadOutlined,
  //   route: "/admin/game-zone-banner/list",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "tracking-pixel-banners",
  //   name: "Tracking Pixel Banners",
  //   icon: DownloadOutlined,
  //   route: "/admin/tracking-pixel-banners/list",
  //   menuParentId: "banner",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "logos",
  //   name: "Homepage logos",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-card",
  //   name: "Card",
  //   icon: DownloadOutlined,
  //   route: "/admin/card-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-loan",
  //   name: "Loan",
  //   icon: DownloadOutlined,
  //   route: "/admin/partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-insurance",
  //   name: "Insurance",
  //   icon: DownloadOutlined,
  //   route: "/admin/insurance-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "logo-securities",
  //   name: "Securities",
  //   icon: DownloadOutlined,
  //   route: "/admin/securities-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "mini-app",
  //   name: "Mini App",
  //   icon: DownloadOutlined,
  //   route: "/admin/linked-app-partner-logos/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "config-theme",
  //   name: "ConfigTheme",
  //   icon: DownloadOutlined,
  //   route: "/admin/config-theme/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin, ROLE.Registered, ROLE.OP, ROLE.Setup, ROLE.CustomSetup],
  // },
  // {
  //   id: "delete-loan",
  //   name: "Delete loan",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin, ROLE.OP],
  // },
  // {
  //   id: "delete-lead-submitted",
  //   name: "Lead submitted",
  //   icon: DownloadOutlined,
  //   route: "/admin/test-lead/list",
  //   menuParentId: "delete-loan",
  //   role: [ROLE.Admin, ROLE.OP],
  // },
  // {
  //   id: "delete-loan-refill",
  //   name: "Loan refill",
  //   icon: DownloadOutlined,
  //   route: "/admin/test-loan-refill/list",
  //   menuParentId: "delete-loan",
  //   role: [ROLE.Admin, ROLE.OP],
  // },
  // {
  //   id: "income-report",
  //   name: "Hồ sơ thu nhập",
  //   icon: DownloadOutlined,
  //   route: "/admin/income-report",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "accountant",
  //   name: "Kế toán",
  //   icon: DownloadOutlined,
  //   route: "/admin/accountant-report",
  //   role: [ROLE.Admin, ROLE.Accountant],
  // },
  // {
  //   id: "product-limit",
  //   name: "Product limit",
  //   icon: DownloadOutlined,
  //   route: "/admin/product-limits/list",
  //   role: [ROLE.Admin, ROLE.Setup],
  // },
  // {
  //   id: "abtesting-phase2",
  //   name: "ABTesting",
  //   icon: DownloadOutlined,
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "flows",
  //   name: "Services",
  //   icon: DownloadOutlined,
  //   route: "/admin/flows/list",
  //   menuParentId: "abtesting-phase2",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "flow-group",
  //   name: "User Flow Group",
  //   icon: DownloadOutlined,
  //   route: "/admin/user-flow-group/list",
  //   menuParentId: "abtesting-phase2",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "greetings",
  //   name: "Greetings",
  //   icon: DownloadOutlined,
  //   route: "/admin/greetings",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "oa-log",
  //   name: "OA log",
  //   icon: DownloadOutlined,
  //   route: "/admin/oa/log",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "configs",
  //   name: "Hard Code",
  //   icon: DownloadOutlined,
  //   route: "/admin/configs",
  //   menuParentId: "delete-loan",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "feature-configs",
  //   name: "Feature Configs",
  //   icon: DownloadOutlined,
  //   route: "/admin/config-feature/list",
  //   menuParentId: "logos",
  //   role: [ROLE.Admin],
  // },
  // {
  //   id: "hold-lead",
  //   name: "Hold lead",
  //   icon: DownloadOutlined,
  //   route: "/admin/hold-lead-logs/list",
  //   menuParentId: "lead",
  //   role: [ROLE.Admin],
  // },
];
