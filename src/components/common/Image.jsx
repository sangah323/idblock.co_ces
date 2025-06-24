import React from 'react'

export default function Image({ src, name, onLoad, style, className }) {
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      decoding="async"
      aria-hidden="true"
      referrerPolicy="no-referrer"
      style={style}
      onLoad={onLoad}
      className={className}
    />
  );
}

