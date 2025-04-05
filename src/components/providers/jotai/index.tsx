"use client";
import { Provider } from "jotai";

interface Props {
  children?: React.ReactNode;
}

const JotaiProvider: React.FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;
