import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link, scroller } from 'react-scroll';

import styles from '@/style/developer/DevSidebar.module.css';
import Image from '@/components/common/Image';

import { translate } from '@/utils/translates';
import { getTitleByType } from '@/utils/map';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export default function DevSidebar({ currentTab, setCurrentTab }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState('');

  const width = useWindowWidth();
  const isMobile = width <= 768;
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const lan = useSelector((state) => state.lan.ver);
  const tabList = translate('developer', lan.toLowerCase(), `devSidebar.context`);
  const dashboardTabList = translate('developer', lan.toLowerCase(), `devSidebarDashboard.context`);

  function getLastPathSegment(url) {
    const segments = url.split('/').filter((segment) => segment.length > 0);
    return segments[segments.length - 1];
  }
  const currentPath = getLastPathSegment(location.pathname);

  useEffect(() => {
    if (currentPath !== 'dev') {
      setCurrentTab(getTitleByType(dashboardTabList, currentPath));
      setOpenDropdown(currentPath);
      navigate(`/dev/dashboard/${openDropdown}`);
    }
  }, [currentPath, dashboardTabList, navigate, openDropdown, setCurrentTab]);

  const handlePageMove = (key) => {
    setCurrentTab(key.title);
    setOpenDropdown(key.type);
  };

  const handleDropdown = (key) => {
    setCurrentTab(key.title);
    setOpenDropdown((prev) => (prev === key.type ? null : key.type));
  };

  const handleCurrentTab = (key) => {
    setCurrentTab(key.title);
  };

  const handleScroll = (item) => {
    setOpenMobileDropdown(!openMobileDropdown);
    if (currentTab !== item.title) {
      scroller.scrollTo(item.type, {
        duration: 500,
        smooth: true,
      });
    }
  };

  const dashboardSidebarItems = dashboardTabList.map((item) => {
    return (
      <li key={item.type} className={styles.sidebarItem}>
        <div
          onClick={() => handlePageMove(item)}
          className={`${styles.context} ${currentTab === item.title ? styles.tabActive : ''}`}
        >
          <p>{item.title}</p>
        </div>
      </li>
    );
  });

  const sidebarItems = tabList.map((item) => {
    const sidebarItemTabs = item.tabs.map((tab, index) => (
      <Link
        key={tab}
        to={item.tabsType[index]}
        smooth={true}
        duration={500}
        offset={isMobile ? -650 : -100}
        aria-label="sidebar menu"
      >
        <li
          onClick={isMobile ? (prev) => setOpenMobileDropdown(!prev) : () => handleCurrentTab(item)}
        >
          <p className={currentTab === tab ? styles.tabActive : ''}>{tab}</p>
        </li>
      </Link>
    ));

    if (isMobile) {
      return (
        <li
          key={item.type}
          className={`${styles.sidebarItem} ${currentTab === item.title || openMobileDropdown ? styles.mobileMenuActive : ''}`}
        >
          <button onClick={() => handleScroll(item)}>
            <div
              onClick={() => handleDropdown(item)}
              className={`${styles.context} ${currentTab === item.title ? styles.tabActive : ''}`}
            >
              <p>{item.title}</p>
              <Image
                className={`${openMobileDropdown ? styles.iconActive : ''}`}
                src="/assets/developer/arrow-icon.png"
                alt="arrow icon"
              />
            </div>
          </button>
          <ul className={`${styles.dropdown} ${openMobileDropdown ? styles.dropdownActive : ''}`}>
            {sidebarItemTabs}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={item.type} className={styles.sidebarItem}>
          <Link to={item.type} smooth={true} duration={500} offset={-100} aria-label="sidebar menu">
            <div
              onClick={() => handleDropdown(item)}
              className={`${styles.context} ${currentTab === item.title ? styles.tabActive : ''}`}
            >
              <p>{item.title}</p>
              <Image
                className={`${openDropdown === item.type ? styles.iconActive : ''}`}
                src="/assets/developer/arrow-icon.png"
                alt="arrow icon"
              />
            </div>
          </Link>
          <ul
            className={`${styles.dropdown} ${openDropdown === item.type ? styles.dropdownActive : ''}`}
          >
            {sidebarItemTabs}
          </ul>
        </li>
      );
    }
  });

  return (
    <aside>
      <ul className={styles.sidebarBox}>
        {currentPath === 'dev' ? sidebarItems : dashboardSidebarItems}
      </ul>
    </aside>
  );
}
