import React from "react";
import { Meta } from "./Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
