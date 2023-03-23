import { type FunctionComponent } from "react";
import PostCardSmall from "../postCardSmall/postCardSmall";
import { api } from "~/utils/api";
import { CircularProgress } from "@mui/material";

interface RelatedPostsProps {
  cat: string;
}

const RelatedPosts: FunctionComponent<RelatedPostsProps> = ({ cat }) => {
  const { data, error, isLoading } = api.post.getCatNews.useQuery({
    cat: cat,
    take: 3,
  });

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <h2 className="ml-2 mb-4 text-2xl font-semibold">Posts relacionados</h2>
      <div className="flex flex-col gap-2 sm:w-3/4 lg:w-full">
        {data?.map((post) => {
          return <PostCardSmall key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
