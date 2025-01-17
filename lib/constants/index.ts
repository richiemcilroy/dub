export const LOCALHOST_GEO_DATA = {
  city: "San Francisco",
  region: "CA",
  country: "US",
  latitude: "37.7695",
  longitude: "-122.385",
};

export const INTERVALS = ["1h", "24h", "7d", "30d"];

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.2, bounce: 0 },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const HOME_HOSTNAMES = new Set([
  // comment for better diffs
  "dub.sh",
  "preview.dub.sh",
  "localhost:3000",
  "c623-2600-1700-b5e4-b50-d083-66f5-64b2-e8bb.ngrok.io",
]);

export const RESERVED_KEYS = new Set([
  "api",
  "va",
  "static",
  "stats",
  "proxy",
  "auth",
  "pricing",
  "about",
  "placeholder",
  "metatags",
  "blog",
  "careers",
  "docs",
  "features",
  "contact",
  "terms",
  "privacy",
  "admin",
  "help",
  "new",
  "info",
  "demo",
]);
export const DEFAULT_REDIRECTS = {
  home: "https://dub.sh",
  signin: "https://app.dub.sh/login",
  login: "https://app.dub.sh/login",
  register: "https://app.dub.sh/register",
  signup: "https://app.dub.sh/register",
  app: "https://app.dub.sh",
  dashboard: "https://app.dub.sh",
  links: "https://app.dub.sh/links",
  settings: "https://app.dub.sh/settings",
  welcome: "https://app.dub.sh/welcome",
  slack: "https://dub.slack.com",
  discord: "https://twitter.com/dubdotsh", // placeholder for now
};

export const FREE_PLAN_PROJECT_LIMIT = 5;
export const FAVICON_FOLDER = "/_static/favicons";
export { default as COUNTRIES } from "./countries";
export { default as ccTLDs } from "./cctlds";

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);

export const SPECIAL_APEX_DOMAINS = {
  "youtu.be": "youtube.com",
};

export const DEFAULT_LINK_PROPS = {
  key: "github",
  url: "https://github.com/steven-tey/dub",
  domain: "dub.sh",
  archived: false,
  expiresAt: null,
  password: null,

  title: null,
  description: null,
  image: null,
  ios: null,
  android: null,

  clicks: 0,
  userId: "",
  createdAt: new Date(),

  proxy: false,
};
