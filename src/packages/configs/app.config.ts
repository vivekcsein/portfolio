import { envAppConfig } from "../env/app.env";
import { envClientConfig } from "../env/client.env";
import { envPublicConfig } from "../env/public.env";

const api = `${envClientConfig.CLIENT_ORIGIN}/${envClientConfig.CLIENT_PREFIX}`;

const appConfig = {
  // App config
  app: {
    name: envPublicConfig.APP_NAME,
    version: envPublicConfig.APP_VERSION,
    description: envPublicConfig.APP_DESCRIPTION,
    environment: envAppConfig.NODE_ENV,
    locale: "en",
    timezone: "UTC",
  },

  // Site config
  site: {
    url: envPublicConfig.SITE_URL,
    title: envPublicConfig.SITE_TITLE,
    logo: envPublicConfig.LOGO_URL,
    ogImage: envPublicConfig.OG_IMAGE_URL,
    active: envPublicConfig.ACTIVE_THEME,
  },

  social: {
    twitter: envPublicConfig.TWITTER,
    linkedin: envPublicConfig.LINKEDIN,
    github: envPublicConfig.GITHUB,
  },

  author: {
    name: envPublicConfig.AUTHOR_NAME,
    email: envPublicConfig.AUTHOR_EMAIL,
  },

  logging: {
    enabled: envAppConfig.NODE_ENV !== "production",
    stackTrace: envAppConfig.NODE_ENV !== "production",
  },

  headers: {
    requestId: "X-Request-Id",
    traceId: "X-Trace-Id",
    poweredBy: "X-Powered-By",
  },

  pagination: {
    defaultPage: 1,
    defaultLimit: 20,
    maxLimit: 100,
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  },

  motion_duration: {
    instant: 100,
    fast: 150,
    base: 250,
    slow: 400,
  },

  routes: {
    home: "/",
    about: "/about",

    docs: "/docs",
    projects: "/projects",
    techStack: "/tech-stack",
    blogs: "/blogs",
    journey: "/journey",

    robots: "/robots.txt",
    sitemap: "/sitemap.xml",
    favicon: "/favicon.ico",
    logo: "/logo.png",

    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
    notFound: "/404",

    services: {
      webDevelopment: "/services/web-development",
      performance: "/services/performance",
      backend: "/services/backend",
      security: "/services/authentication-security",
      seo: "/services/seo-ad-monetization",
      ar: "/services/ar-experiences",
    },
  },

  api: {
    base: api,
  },
} as const;

export default appConfig;
