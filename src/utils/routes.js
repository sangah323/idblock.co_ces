export const HOME_ROUTES = {
  INDEX: {
    PATH: '/',
    NAME: 'home',
  },
};

export const ABOUT_ROUTES = {
  INDEX: {
    PATH: '/about',
    NAME: 'about',
  },
};

export const DEVCENTER_ROUTES = {
  INDEX: {
    PATH: '/devcenter',
    NAME: 'devcenter',
  },
};

export const CAREERS_ROUTES = {
  ROOT: {
    PATH: '/careers',
    NAME: 'careers',
  },
  DETAIL: {
    PATH: (careerId = ':careerId') => `/careers/detail/${careerId}`,
  },
};

export const BLOG_ROUTES = {
  ROOT: {
    PATH: '/blog',
    NAME: 'blog',
  },
  DETAIL: {
    PATH: (slug = ':slug') => `/blog/detail/${slug}`,
  },
};

export const DEVELOPER_ROUTES = {
  ROOT: {
    PATH: '/dev',
  },
  DASHBOARD: {
    PATH: '/dev/dashboard',
  },
  DASHBOARD_API: {
    PATH: '/dev/dashboard/api',
  },
  DASHBOARD_PAYMENT: {
    PATH: '/dev/dashboard/payment',
  },
};

export const AUTH_ROUTES = {
  ROOT: {
    PATH: '/',
  },
  LOGIN: {
    PATH: '/login',
  },
  SIGNUP: {
    PATH: '/signup',
  },
};

export const POLICY_ROUTES = {
  PRIVACY: {
    PATH: '/privacy',
    NAME: 'privacy',
  },
  PRIVACY_EN: {
    PATH: '/privacy-en',
    NAME: 'privacy-en',
  },
};

export const NOTFOUND_ROUTES = {
  ROOT: {
    PATH: '/notfound',
  },
};
