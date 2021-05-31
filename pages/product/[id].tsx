import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function DetailedProduct() {
  return (
    <div>
      <Head>
        <title>Sản phẩm mới</title>
        <link rel="icon" href="/images/icon/carts.png" />
      </Head>
      <main>
        Trang chi tiết sản phẩm
        <Link href="/">
          <button>quay lại</button>
        </Link>
      </main>
    </div>
  );
}
