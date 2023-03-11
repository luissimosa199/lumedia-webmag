import { type NextPage } from "next";
import PostCard from "~/components/postCard/postCard";
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
      <ul>
        <PostCard/>
      </ul>
    </>
  );
};

export default Home;
