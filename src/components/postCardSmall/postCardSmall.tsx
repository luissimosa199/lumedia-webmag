import { type Post } from "@prisma/client";
import Link from "next/link";
import { type FunctionComponent } from "react";
import Image from "next/image";

interface PostCardSmallProps {
  post: Post;
}

const PostCardSmall: FunctionComponent<PostCardSmallProps> = ({ post }) => {
  return (
    <div className="mr-4 grid grid-cols-4 lg:grid-cols-3 justify-items-start">

      <div className="h-24 w-24 border col-start-1 justify-self-center bg-slate-100 relative">
        <Image className="object-cover" fill alt="" src={`${(post?.images[0] as string)}`} />
      </div>

      <div className="col-span-3 lg:col-span-2">
        <Link href={`/post/${post.id}`}>
          <h3 className="text-lg font-semibold">{post.title}</h3>
        </Link>
      </div>

    </div>
  );
};

export default PostCardSmall;
