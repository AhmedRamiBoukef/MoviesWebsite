import Head from "next/head";
import { Header } from "../Components/Header";
import { Nav } from "../Components/Nav";
import { Results } from "../Components/Results";
import requests from "../utils/requests";

export default function Home({ results, genre }) {
  console.log(genre);
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request4 = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }&page=1`
  ).then((res) => res.json());
  const request1 = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }&page=2`
  ).then((res) => res.json());
  const request2 = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }&page=3`
  ).then((res) => res.json());
  const request3 = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }&page=4`
  ).then((res) => res.json());
  let request = [...request1.results,...request2.results,...request3.results,...request4.results];

  return {
    props: {
      results: request,
      genre: requests[genre]?.url,
    },
  };
}
