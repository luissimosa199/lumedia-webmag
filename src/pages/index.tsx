import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, error, isLoading } = api.post.getLatest.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <>
        <div>{error.message}</div>;
      </>
    );
  }

  return (
    <>
      <h2>PUBLICACIONES</h2>
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Home;
