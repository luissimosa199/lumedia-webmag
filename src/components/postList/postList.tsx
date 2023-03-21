import { api } from "~/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import PostCard from "../postCard/postCard";

const PostList = () => {
  const { data, error, isLoading } = api.post.getLatest.useQuery();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (<div className="h-screen flex justify-center items-center">
      <CircularProgress />
    </div>)
  }

  return (
    <div className="min-h-screen">
      <ul className="grid md:grid-cols-2 md:px-24">
        <PostCard data={data} />
      </ul>
    </div>
  );
};

export default PostList;
