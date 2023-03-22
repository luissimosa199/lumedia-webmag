import { Post } from "@prisma/client";
import Link from "next/link";
import { FunctionComponent } from "react";

interface PostCardSmallProps {
  post: Post;
}

const PostCardSmall: FunctionComponent<PostCardSmallProps> = ({ post }) => {
  return (
    <div className="mx-4 grid grid-cols-4">
      <div className="h-24 w-24 border col-start-1 justify-self-center bg-slate-100"></div>
      <div className="col-span-3">
        <Link href={`/post/${post.id}`}>
          <h3 className="text-lg font-semibold">{post.title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default PostCardSmall;
