import React from 'react';

const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd" opacity={0.5}>
      <path
        fill="url(#a)"
        d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Zm9.25-7.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z"
      />
      <path
        fill="url(#b)"
        d="M7.141 6.641A4.738 4.738 0 0 1 10.5 5.25c1.311 0 2.5.532 3.359 1.391a.75.75 0 0 1-1.06 1.06A3.238 3.238 0 0 0 10.5 6.75c-.898 0-1.71.363-2.298.952a.75.75 0 0 1-1.06-1.06Z"
      />
      <path
        fill="url(#c)"
        d="M16.08 16.08a.75.75 0 0 1 1.061 0l4.243 4.243a.75.75 0 0 1-1.06 1.06l-4.243-4.242a.75.75 0 0 1 0-1.06Z"
      />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={1.25}
        x2={19.976}
        y1={1.25}
        y2={1.481}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#73E0A9" />
        <stop offset={1} stopColor="#5B68DF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={6.922}
        x2={14.159}
        y1={5.25}
        y2={5.489}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#73E0A9" />
        <stop offset={1} stopColor="#5B68DF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={15.861}
        x2={21.674}
        y1={15.861}
        y2={15.933}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#73E0A9" />
        <stop offset={1} stopColor="#5B68DF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SearchIcon;
