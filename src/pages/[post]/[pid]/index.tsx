import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import AuthorCard from "~/components/authorCard/authorCard";
import RelatedPosts from "~/components/relatedPosts/relatedPosts";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, error, isLoading } = api.post.getOne.useQuery({
    id: pid as string,
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
    <div>
      <article>
        <div className="flex h-64 flex-col justify-end gap-2 bg-slate-100 p-4">
          <div className="flex items-center">
            <p className="mr-2 cursor-pointer rounded bg-yellow-300 px-2 py-[1px] text-sm uppercase transition-all hover:opacity-75">
              {data?.tags[1]}
            </p>
            <p className="text-xs">{data?.createAt.toLocaleDateString()}</p>
          </div>
          <h1 className="text-2xl font-semibold">{data?.title}</h1>
        </div>
        <div className="m-4">
          {data?.content.split("\n\n").map((e, idx) => {
            return (
              <p className="mb-4" key={idx}>
                {e}
              </p>
            );
          })}
        </div>
      </article>

      <AuthorCard />
      <RelatedPosts cat={(data?.tags[1]) as string}/>
    </div>
  );
};

export default Post;
