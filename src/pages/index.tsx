import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
        <Head>
          <title>Studlink</title>
          <meta
            name="description"
            content="Studlink is a platform for students to connect with each other."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
        </Head>

          <h1>
            Welcome to Studlink
          </h1>
      </>
  );
}
