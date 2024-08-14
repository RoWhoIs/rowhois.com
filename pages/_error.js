import Head from "next/head";
import { Navigation, Footer } from "@/modules/navigation";

export default function Main({ statusCode }) {
  let blurb = "Whoops! It looks like an error occurred.";
  let message = statusCode + ": An Error!";
  if (statusCode === 404) {
    blurb = "Whoops! We couldn't find the page you were requesting.";
    message = "404: Not Found!";
  }
  return (
    <>
      <Head>
        <title>RoWhoIs - {statusCode}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="content">
        <h1>{message}</h1>
        <p>{blurb}</p>
      </div>
      <Footer />
    </>
  );
}

Main.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err;
  return { statusCode };
};
