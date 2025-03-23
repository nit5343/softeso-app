export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  TERMS: '/terms',
  REFUND: '/refund',
  SERVICES: {
    WEB_DEVELOPMENT: '/services/web-development',
    MOBILE_DEVELOPMENT: '/services/mobile-development',
    UI_UX_DESIGN: '/services/ui-ux-design',
    CLOUD_DEVOPS: '/services/cloud-devops'
  }
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];