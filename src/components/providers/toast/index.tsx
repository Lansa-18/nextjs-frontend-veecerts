"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children?: React.ReactNode;
}

const ToastProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ToastProvider;
