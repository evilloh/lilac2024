import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Lillawards 2024' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
    <footer className="bg-primary-black text-primary-white h-32 flex flex-row items-center">
      <div className="w-1/2 mx-auto text-center">Footerino patatino</div>
    </footer>
  </div>
);

export default Layout;
