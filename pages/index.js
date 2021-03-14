import Head from "next/head";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Combee Creations</title>
        <link rel="icon" href="/ccLogo.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>

        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <Banner />
    </div>
  );
}
