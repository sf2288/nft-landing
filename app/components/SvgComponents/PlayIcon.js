import * as React from 'react';
const PlayIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M3.333 32C3.333 16.168 16.168 3.333 32 3.333S60.667 16.168 60.667 32 47.832 60.667 32 60.667 3.333 47.832 3.333 32ZM32 7.333C18.377 7.333 7.333 18.377 7.333 32c0 13.623 11.044 24.667 24.667 24.667 13.623 0 24.667-11.044 24.667-24.667C56.667 18.377 45.623 7.333 32 7.333Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="M25.667 21.03a2 2 0 0 1 2 0l16 9.238a2 2 0 0 1 0 3.464l-16 9.238a2 2 0 0 1-3-1.732V22.762a2 2 0 0 1 1-1.732Zm3 5.197v11.547l10-5.774-10-5.773Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.333}
        x2={61.366}
        y1={3.333}
        y2={4.05}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#73E0A9" />
        <stop offset={1} stopColor="#5B68DF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={24.667}
        x2={44.911}
        y1={20.762}
        y2={20.985}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#73E0A9" />
        <stop offset={1} stopColor="#5B68DF" />
      </linearGradient>
    </defs>
  </svg>
);
export default PlayIcon;
