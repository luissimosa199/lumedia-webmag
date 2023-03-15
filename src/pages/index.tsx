import { type NextPage } from "next";
import PostCard from "~/components/postCard/postCard";

const Home: NextPage = () => {

  return (
    <>
      <ul>
        <PostCard/>
      </ul>
    </>
  );
};

export default Home;
