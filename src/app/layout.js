import "./global.css";
import Head from "next/head";

export const metadata = {
  title: "Jeronimo Vilar",
  description: "Este es mi porfolio de programacion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
