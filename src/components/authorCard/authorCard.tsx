import { type FunctionComponent } from "react";
import { api } from "~/utils/api";
import Image from "next/image";

interface AuthorCardProps {
  authorId: string;
}

const AuthorCard: FunctionComponent<AuthorCardProps> = ({ authorId }) => {
  
  const { data, error, isLoading } = api.author.getAuthorInfo.useQuery({
    id: authorId as string,
  });

  return (
    <div className="m-2 grid gap-4 min-[475px]:grid-cols-4">
      <div className="col-start-2 flex items-center justify-center min-[475px]:col-start-1">
        <div className="h-[100px] w-[100px] rounded-full bg-slate-100">
          <Image width={100} height={100} src={data?.image as string} alt={`${data?.name} profile picture`} />
        </div>
      </div>

      <div className="col-span-3 flex flex-col justify-center gap-2">
        <h2 className="text-2xl font-semibold">{data?.name}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minima
          expedita eos debitis, velit voluptas cum illo dolorem reiciendis quia.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
