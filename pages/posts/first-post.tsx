import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Post() {
  return (
    <div className="container">
      <Head>
        <title>My post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Image
            src="/images/naruto.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>

        <h1 className="title">my first post</h1>
        <div>Learn</div>

        <Link href="/">
          <div>
            Learn <a>Next.js!</a>
          </div>
        </Link>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
