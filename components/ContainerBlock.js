import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  return (
    <div>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}