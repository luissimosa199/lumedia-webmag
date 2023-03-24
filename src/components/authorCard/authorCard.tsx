import { type FunctionComponent } from "react";

interface AuthorCardProps {
  authorId: string
}

const AuthorCard: FunctionComponent<AuthorCardProps> = ({ authorId }) => {
  return (
    <div className="grid min-[475px]:grid-cols-4 m-2 gap-4">

      <div className="col-start-2 min-[475px]:col-start-1 flex items-center justify-center">
        <div className="h-[100px] w-[100px] rounded-full bg-slate-100"></div>
      </div>

      <div className="col-span-3 flex flex-col justify-center gap-2">
        <h2 className="text-2xl font-semibold">{authorId}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minima
          expedita eos debitis, velit voluptas cum illo dolorem reiciendis quia.
        </p>
      </div>

    </div>
  );
};

export default AuthorCard;
