'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface ITemplateBaseProps {
  children: ReactNode;
}

export default function TemplateBase(props: ITemplateBaseProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
