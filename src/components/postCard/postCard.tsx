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
                className="my-8 mx-3 grid grid-rows-2 border bg-slate-100 p-2"
              >
                <div className="row-start-2 flex flex-col">
                  <div className="flex gap-2">
                    <p className="">{post.tags[0]}</p>
                    <p className="">{post.createAt.toLocaleDateString()}</p>
                  </div>
                  <p className="">{post.title}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostCard;
