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
    <div className="lg:grid lg:grid-cols-3 lg:grid-rows-[repeat(3, minmax(fit-content, 1fr))] lg:gap-y-2">

      {/* header */}
      <div className="flex h-64 flex-col justify-end gap-2 bg-slate-100 p-4 lg:col-span-3 lg:">
        <div className="flex items-center">
          <p className="mr-2 cursor-pointer rounded bg-yellow-300 px-2 py-[1px] text-sm uppercase transition-all hover:opacity-75">
            {data?.tags[1]}
          </p>
          <p className="text-xs">{data?.createAt.toLocaleDateString()}</p>
        </div>
        <h1 className="text-2xl font-semibold">{data?.title}</h1>
      </div>

      {/* content */}
      <article className="lg:col-span-2 lg:row-start-2 lg:row-span-4">
        <div className="m-4 lg:mx-12">
          {data?.content.split("\n\n").map((e, idx) => {
            return (
              <p className="mb-4" key={idx}>
                {e}
              </p>
            );
          })}
        </div>
        <AuthorCard authorId={data?.authorId as string} />
      </article>

      {/* sidebar */}
      <div className="lg:row-start-2">
        <RelatedPosts cat={data?.tags[1] as string} pid={data?.id as string} />
      </div>

    </div>
  );
};

export default Post;
