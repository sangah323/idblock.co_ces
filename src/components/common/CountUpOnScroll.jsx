import React, { useEffect, useRef, useState } from 'react'


export default function CountUpOnScroll({ target = 100, duration = 2000, prefix='', suffix='' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const value = Math.min(Math.floor((progress / duration) * target), target);
      setCount(value);
      if (value < target) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [visible, target, duration]);

  const formattedCount = count.toLocaleString();

  return (
    <div ref={ref}>
      <span>{prefix}</span>
      {formattedCount}
      <span>{suffix}</span>
    </div>
  )
}
