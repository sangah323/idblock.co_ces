import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogPost from '@/components/blog/BlogPost';

export default function BlogDetail() {
  const { slug } = useParams();
  const lan = useSelector((state) => state.lan.ver);

  // useEffect(() => {
  //   document.documentElement.classList.add('scroll-lock');
  //   document.body.classList.add('scroll-lock');

  //   const interval = setInterval(() => {
  //     const iframe = document.getElementById('pdfWrapper');
  //     if (iframe) {
  //       setTimeout(() => {
  //         document.documentElement.classList.remove('scroll-lock');
  //         document.body.classList.remove('scroll-lock');
  //         window.scrollTo(0, 0);
  //       }, 200);

  //       clearInterval(interval);
  //     }
  //   }, 100);

  //   return () => {
  //     clearInterval(interval);
  //     document.documentElement.classList.remove('scroll-lock');
  //     document.body.classList.remove('scroll-lock');
  //   };
  // }, []);

  return <BlogPost slug={slug} lan={lan.toLowerCase()} />;
}
