import React from "react";
import Head from "next/head";

import PendingScreen from "@/screens/wholesaler/pending/screen";

export default function Pending() {
  return (
    <>
      <Head>
        <title>Xuping | Kutish</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <PendingScreen />
    </>
  );
}
