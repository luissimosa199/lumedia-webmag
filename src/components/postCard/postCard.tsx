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
      <ul>
        {data &&
          data.map((post) => {
            return (
              <li
                key={post.id}
                className="my-8 mx-3 grid grid-rows-2 border bg-slate-100 p-2 h-64"
              >
                <div className="row-start-2 flex flex-col self-end">
                  <div className="flex gap-2 mb-2 items-center">
                    <p className="uppercase bg-yellow-300 px-2 py-[1px] rounded text-sm mr-2">{post.tags[0]}</p>
                    <p className="text-xs">{post.createAt.toLocaleDateString()}</p>
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
