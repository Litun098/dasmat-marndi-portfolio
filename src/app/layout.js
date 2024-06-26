import TransitionProvider from "@/components/transitionProvider";

import Head from 'next/head';
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dasmat Marndi Portfolio",
  description: "Personal portfolio page",
  keywords: "Dasmat Marndi, portfolio, veterinary, trader, contact",
  author: "Dasmat Marndi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Dasmat Marndi Portfolio" />
        <meta property="og:description" content="Personal portfolio page of Dasmat Marndi, showcasing veterinary skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dasmatmarndi.netlify.app/" />
        <meta property="og:image" content="https://dasmatmarndi.netlify.app/your-image.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dasmat Marndi Portfolio" />
        <meta name="twitter:description" content="Personal portfolio page of Dasmat Marndi, showcasing veterinary skills." />
        <meta name="twitter:image" content="https://dasmatmarndi.netlify.app/your-image.jpg" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
      </Head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
