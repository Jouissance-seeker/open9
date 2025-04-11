"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { Suspense } from "react";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

interface IProps {
  children: ReactNode;
}

export default function Providers({ children }: IProps) {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #E0FF27",
        }}
        innerStyle={{
          backgroundColor: "#E0FF27",
        }}
      />
      <Suspense>{children}</Suspense>
    </>
  );
}
