import { type FunctionComponent } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { CircularProgress } from "@mui/material";
import PostCard from "~/components/postCard/postCard";

const CatPage: FunctionComponent = () => {
  const router = useRouter();
  const { catName } = router.query;

  const { data, error, isLoading } = api.post.getCatNews.useQuery({
    cat: catName as string,
    take: 10,
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <h1 className="capitalize text-2xl font-semibold ml-28 my-2">{catName}</h1>
      <ul className="grid md:grid-cols-2 md:px-24">
        <PostCard data={data} />
      </ul>
    </div>
  );
};

export default CatPage;
