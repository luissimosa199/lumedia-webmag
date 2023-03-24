import { api } from "~/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import PostCard from "~/components/postCard/postCard";

const Novedades = () => {
  const { data, error, isLoading } = api.post.getLatest.useQuery({
    take: 10
  });

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
      <h1 className="capitalize text-2xl font-semibold ml-28 my-2">Novedades</h1>
      <ul className="grid md:grid-cols-2 md:px-24">
        <PostCard data={data} />
      </ul>
    </div>
  );
};

export default Novedades;