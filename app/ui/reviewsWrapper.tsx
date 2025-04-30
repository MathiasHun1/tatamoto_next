'use client';

import dynamic from 'next/dynamic';

const Reviews = dynamic(() => import('./reviews'), {
  ssr: false,
});
export default Reviews;
