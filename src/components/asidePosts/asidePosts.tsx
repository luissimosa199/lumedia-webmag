import { type FunctionComponent } from "react";
import { api } from "~/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

const AsidePosts: FunctionComponent = () => {
  const { data, error, isLoading } = api.post.getLatest.useQuery({
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
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <div className="flex gap-2">
                <div className="h-20 w-20 flex-shrink-0 border-2"></div>
                <h3 className="text-lg">{post.title}</h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AsidePosts;