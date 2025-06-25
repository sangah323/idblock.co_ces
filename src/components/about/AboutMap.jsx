import React, { useEffect, useRef, useState } from 'react';

import styles from '@/style/about/AboutMap.module.css';
import { CONTACT_ICON_LIST } from '@/utils/constants';
import { translate } from '@/utils/translates';
import { MAP_LOCATION_LIST } from '@/utils/constants';
import { useT } from '@/hooks/useT';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import Image from '@/components/common/Image';
import { getGoogleApiKey } from '@/utils/secret';

export default function AboutMap({ lan }) {
  const mapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useT('AboutMap');
  const mapList = translate('about', lan.toLowerCase(), 'AboutMap.maps');


  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(MAP_LOCATION_LIST[activeIndex]);
    }
  }, [activeIndex]);

  const handleMapChange = (index) => {
    setActiveIndex(index);
  };

  const locations = MAP_LOCATION_LIST.map((_, index) => {
    return (
      <li
        onClick={() => handleMapChange(index)}
        key={index}
        className={`${activeIndex === index ? styles.active : ''}`}
      >{`${mapList[index].name.split(' ')[0]}`}</li>
    );
  });

  return (
    <section className={`subSection ${styles.mapSection}`}>
      <div className={`container ${styles.mapContainer}`}>
        <h2 className={styles.mapTitle}>{t("title")}</h2>

        <div className={styles.mapGrid}>
          <div className={styles.mapContact}>
            <div className={styles.contactRow}>
              <Image src={CONTACT_ICON_LIST[0]} alt="contact-icon" />
              <p className={styles.contactText}>{t("contact")}</p>
            </div>
            <div className={styles.contactRow}>
              <Image src={CONTACT_ICON_LIST[1]} alt="contact-icon" />
              <p className={styles.contactText}>{t("email")}</p>
            </div>
          </div>

          <div className={styles.mapBox}>
            <div className={styles.sideBarWrapper}>
              <ul className={styles.sideBar}>{locations}</ul>
            </div>

            <div className={styles.currentMap}>
              <div className={styles.contactRow}>
                <Image src={CONTACT_ICON_LIST[2]} alt="contact-icon" />
                <p>{`${mapList[activeIndex].name}`}</p>
                <p>{`${mapList[activeIndex].address}`}</p>
              </div>

              <APIProvider apiKey={`${getGoogleApiKey().API_KEY}`}>
                <Map
                  className={styles.mapImage}
                  center={MAP_LOCATION_LIST[activeIndex]}
                  defaultZoom={10}
                  mapId={`${mapList[activeIndex].name}`}
                >
                  <AdvancedMarker position={MAP_LOCATION_LIST[activeIndex]} />
                </Map>
              </APIProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
