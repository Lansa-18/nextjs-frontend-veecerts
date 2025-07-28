"use client";

import dynamic from 'next/dynamic';

const HotToaster = dynamic(
  () => import('react-hot-toast').then((mod) => mod.Toaster),
  { ssr: false }
);

const Toaster = () => {
  return <HotToaster />;
};

export default Toaster;
