import { HOME_ROUTES } from '@/utils/routes';
import { DEVCENTER_ROUTES } from '@/utils/routes';
import { ABOUT_ROUTES } from '@/utils/routes';
import { CAREERS_ROUTES } from '@/utils/routes';
import { BLOG_ROUTES } from '@/utils/routes';

import { useSelector } from 'react-redux';
import { translate } from '@/utils/translates';

export function useMenuData() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) => translate('common', lan.toLowerCase(), `Header.${key}`);

  return [
    {
      label: t(`${HOME_ROUTES.INDEX.NAME}.label`),
      path: HOME_ROUTES.INDEX.PATH,
      key: HOME_ROUTES.INDEX.NAME,
    },
    {
      label: t(`${ABOUT_ROUTES.INDEX.NAME}.label`),
      path: ABOUT_ROUTES.INDEX.PATH,
      key: ABOUT_ROUTES.INDEX.NAME,
      children: [
        {
          label: t(`${ABOUT_ROUTES.INDEX.NAME}.children.aboutMain`),
          path: 'aboutMain',
        },
        {
          label: t(`${ABOUT_ROUTES.INDEX.NAME}.children.history`),
          path: 'history',
        },
        { label: t(`${ABOUT_ROUTES.INDEX.NAME}.children.news`), path: 'news' },
        { label: t(`${ABOUT_ROUTES.INDEX.NAME}.children.map`), path: 'map' },
        {
          label: t(`${ABOUT_ROUTES.INDEX.NAME}.children.contact`),
          path: 'contact',
        },
      ],
    },
    {
      label: t(`${DEVCENTER_ROUTES.INDEX.NAME}.label`),
      path: DEVCENTER_ROUTES.INDEX.PATH,
      key: DEVCENTER_ROUTES.INDEX.NAME,
    },
    {
      label: t(`${CAREERS_ROUTES.ROOT.NAME}.label`),
      path: CAREERS_ROUTES.ROOT.PATH,
      key: CAREERS_ROUTES.ROOT.NAME,
    },
    {
      label: t(`${BLOG_ROUTES.ROOT.NAME}.label`),
      path: BLOG_ROUTES.ROOT.PATH,
      key: BLOG_ROUTES.ROOT.NAME,
    },
  ];
}
