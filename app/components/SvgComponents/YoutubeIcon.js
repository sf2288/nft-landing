import * as React from 'react';
const YoutubeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#1F1D2B"
      stroke="#ffffff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.532 5.207C8.303 5.07 10.459 5 11.999 5s3.696.07 6.47.207a3 3 0 0 1 2.84 2.747c.126 1.517.19 2.853.19 4.008 0 1.17-.065 2.524-.195 4.064a3 3 0 0 1-2.794 2.741C16.14 18.922 13.97 19 12 19c-1.97 0-4.14-.078-6.51-.233a3 3 0 0 1-2.793-2.74 48.884 48.884 0 0 1-.197-4.065c0-1.145.064-2.482.192-4.01a3 3 0 0 1 2.84-2.745Z"
    />
    <path
      fill="#ffffff"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 9.805v4.398a.429.429 0 0 0 .665.357l3.299-2.18a.429.429 0 0 0 .002-.713L11.168 9.45a.429.429 0 0 0-.668.356Z"
    />
  </svg>
);
export default YoutubeIcon;
