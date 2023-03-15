import { api } from "~/utils/api";

const PostCard = () => {
  const { data, error, isLoading } = api.post.getLatest.useQuery();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    <div>
      <p>Loading...</p>
    </div>;
  }

  return (
    <div>
      <ul className="grid md:grid-cols-2 md:px-24">
        {data &&
          data.map((post) => {
            return (
              <li
                key={post.id}
                className="my-4 mx-3 grid h-64 grid-rows-2 border bg-slate-100 p-2"
              >
                <div className="row-start-2 flex flex-col self-end">
                  <div className="mb-2 flex items-center gap-2">
                    <p className="mr-2 cursor-pointer rounded bg-yellow-300 px-2 py-[1px] text-sm uppercase transition-all hover:opacity-75">
                      {post.tags[0]}
                    </p>
                    <p className="text-xs">
                      {post.createAt.toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-xl font-semibold">{post.title}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostCard;
