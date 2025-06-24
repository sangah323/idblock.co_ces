export const FILTER_BUTTON_LIST = ['all', 'insight', 'news', 'development', 'design', 'event'];

export const SHARE_OPTIONS = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: '/assets/blog/facebook_icon.png',
    getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: '/assets/blog/twitter_icon.png',
    getUrl: (url, title) => `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '/assets/blog/linkedin_icon.png',
    getUrl: (url, title) => `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
  },
];
