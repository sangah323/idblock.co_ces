import React from 'react';
import { useSelector } from "react-redux";
import { Element } from "react-scroll";

import styles from '@/style/developer/DevGuide.module.css';
import { translate } from '@/utils/translates';

import DevGuideStarted from "@/components/developer/devGuide/DevGuideStarted";
import DevGuideErrorCodes from "@/components/developer/devGuide/DevGuideErrorCodes";

export default function DevGuide() {
  const lan = useSelector((state) => state.lan.ver);
  const t = (key) =>
    translate("developer", lan.toLowerCase(), `devGuide.${key}`);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h1>{t("title")}</h1>
      </div>

      <Element name="started">
        <DevGuideStarted />
      </Element>
      <Element name="errorCode">
        <DevGuideErrorCodes />
      </Element>
    </div>
  );
}