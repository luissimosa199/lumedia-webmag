import { Post } from "@prisma/client";
import Link from "next/link";
import { FunctionComponent } from "react";

interface PostCardProps {
    data: Post[]
}

const PostCard: FunctionComponent<PostCardProps> = ({data}) => {
  return (
    <>
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
                    {post.tags[1]}
                  </p>
                  <p className="text-xs">
                    {post.createAt.toLocaleDateString()}
                  </p>
                </div>
              <Link href={`/post/${post.id}`}>
                <p className="text-xl font-semibold">{post.title}</p>
              </Link>
              </div>
            </li>
          );
        })}
    </>
  );
};

export default PostCard;
