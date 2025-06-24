import commonKor from '@/locales/kor.json';
import commonEng from '@/locales/eng.json';
import commonJpn from '@/locales/jpn.json';
import commonVnm from '@/locales/vnm.json';

import homeKor from '@/locales/home/kor.json';
import homeEng from '@/locales/home/eng.json';
import homeJpn from '@/locales/home/jpn.json';
import homeVnm from '@/locales/home/vnm.json';

import aboutKor from '@/locales/about/kor.json';
import aboutEng from '@/locales/about/eng.json';
import aboutJpn from '@/locales/about/jpn.json';
import aboutVnm from '@/locales/about/vnm.json';

import devcenterKor from '@/locales/devcenter/kor.json';
import devcenterEng from '@/locales/devcenter/eng.json';
import devcenterJpn from '@/locales/devcenter/jpn.json';
import devcenterVnm from '@/locales/devcenter/vnm.json';

import developerKor from '@/locales/developer/kor.json';
import developerEng from '@/locales/developer/eng.json';
import developerJpn from '@/locales/developer/jpn.json';
import developerVnm from '@/locales/developer/vnm.json';

import careersKor from '@/locales/careers/kor.json';
import careersEng from '@/locales/careers/eng.json';
import careersJpn from '@/locales/careers/jpn.json';
import careersVnm from '@/locales/careers/vnm.json';

import careersDetailKor from '@/locales/careers/detail/kor.json';
import careersDetailEng from '@/locales/careers/detail/eng.json';
import careersDetailJpn from '@/locales/careers/detail/jpn.json';
import careersDetailVnm from '@/locales/careers/detail/vnm.json';

import blogKor from '@/locales/blog/kor.json';
import blogEng from '@/locales/blog/eng.json';
import blogJpn from '@/locales/blog/jpn.json';
import blogVnm from '@/locales/blog/vnm.json';

const dicts = {
  kor: {
    common: commonKor,
    home: homeKor,
    about: aboutKor,
    devcenter: devcenterKor,
    developer: developerKor,
    careers: careersKor,
    careersDetail: careersDetailKor,
    blog: blogKor,
  },
  eng: {
    common: commonEng,
    home: homeEng,
    about: aboutEng,
    devcenter: devcenterEng,
    developer: developerEng,
    careers: careersEng,
    careersDetail: careersDetailEng,
    blog: blogEng,
  },
  jpn: {
    common: commonJpn,
    home: homeJpn,
    about: aboutJpn,
    devcenter: devcenterJpn,
    developer: developerJpn,
    careers: careersJpn,
    careersDetail: careersDetailJpn,
    blog: blogJpn,
  },
  vnm: {
    common: commonVnm,
    home: homeVnm,
    about: aboutVnm,
    devcenter: devcenterVnm,
    developer: developerVnm,
    careers: careersVnm,
    careersDetail: careersDetailVnm,
    blog: blogVnm,
  },
};

export const languages = Object.keys(dicts);

export const translate = (page, lang, key) => {
  const dict = dicts[lang]?.[page] || dicts[lang]?.common;
  if (!dict) {
    console.warn(`No dictionary found for lang: ${lang}, page: ${page}`);
    return key;
  }

  const parts = key.split('.');
  let result = dict;

  for (let part of parts) {
    const match = part.match(/^([a-zA-Z0-9_]+)(?:\[(\d+)\])?$/);
    if (!match) {
      console.warn(`Invalid key part: ${part}`);
      return key;
    }

    const prop = match[1];
    const index = match[2] !== undefined ? Number(match[2]) : null;

    result = result?.[prop];
    if (index !== null) {
      if (!Array.isArray(result) || !result[index]) {
        console.warn(`Invalid index access: ${prop}[${index}]`);
        return key;
      }
      result = result[index];
    }

    if (result === undefined) {
      console.warn(`Translation not found: ${key}`);
      return key;
    }
  }

  return result;
};
