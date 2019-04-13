import React from 'react';

function CardIcon({ color }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g transform="translate(4 4)" fill={color} fill-rule="nonzero">
      <rect width="10" height="12" rx="1"></rect>
      <path d="M15.124 4.085l-3-.375-.248 1.984 2.007.251-.995 7.938-6.946-.871L5.694 15l7.938 1a1 1 0 0 0 1.117-.868L15.992 5.2a1 1 0 0 0-.868-1.116v.001z"></path>
    </g>
  </svg>;
}

export default React.memo(CardIcon);
