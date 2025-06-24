import { useEffect, useRef } from "react"

export default function SectionObserver({id, onVisible}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      {
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [id, onVisible]);

  return <div id={id} ref={ref} />;
}
