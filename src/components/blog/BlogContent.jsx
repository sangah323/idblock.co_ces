import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from '@/style/blog/BlogContent.module.css';
import { FILTER_BUTTON_LIST } from '@/utils/constants/blog';

import { useT } from '@/hooks/useT';
import BlogPostList from './BlogPostList';
import FilterBar from '@/components/common/FilterBar';
import Pagination from '@/components/common/Pagination';

import { posts as kor } from "@/utils/blog/postsIndex.kor";
import { posts as eng } from "@/utils/blog/postsIndex.eng";
import { posts as jpn } from "@/utils/blog/postsIndex.jpn";
import { posts as vnm } from "@/utils/blog/postsIndex.vnm";

export default function BlogContent() {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_BUTTON_LIST[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);

  const t = useT("BlogContent");
  const lan = useSelector((state) => state.lan.ver);
  const postsIndex = {
    kor: kor,
    eng: eng,
    jpn: jpn,
    vnm: vnm,
  };
  const posts = postsIndex[lan.toLowerCase()];
  const postsPerPage = 10;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    const postsList = posts.filter((post) => {
      if (selectedFilter === FILTER_BUTTON_LIST[0]) {
        return true;
      } else {
        return selectedFilter === post.filter;
      }
    });

    setFilteredPosts(postsList);
  }, [selectedFilter, posts]);

  useEffect(() => {
    const postsList = filteredPosts.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );

    setVisiblePosts(postsList);
  }, [selectedFilter, currentPage, filteredPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  return (
    <section className={`subSection ${styles.contentSection}`}>
      <div className={`container ${styles.contentContainer}`}>
        <FilterBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <BlogPostList visiblePosts={visiblePosts} />

        {visiblePosts.length > 0 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <div className={styles.showNoPostMessage}>{t("noPostMessage")}</div>
        )}
      </div>
    </section>
  );
}
