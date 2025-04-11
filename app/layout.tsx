import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TemplateBase from "@/containers/templates/base";
import { cn } from "@/utils/cn";
import Providers from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open9",
  description: "developed by jouissance-seeker",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex flex-col", manrope.className)}>
        <Providers>
          <TemplateBase>{props.children}</TemplateBase>
        </Providers>
      </body>
    </html>
  );
}
