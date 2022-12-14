import Head from "next/head";
import { Header } from "../Components/Header";
import { Nav } from "../Components/Nav";
import { Pagination } from "../Components/Pagination";
import { Results } from "../Components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <Header />
      <Nav />
      <Results results={results} />
      <Pagination />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const index = context.query.index;
  console.log(requests.fetchTrending.url);

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }&page=${index || 1}`
  ).then((res) => res.json());
  console.log(request);

  return {
    props: {
      results: request.results,
    },
  };
}
