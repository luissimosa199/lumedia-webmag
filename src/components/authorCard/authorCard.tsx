import { type FunctionComponent } from "react";

const AuthorCard: FunctionComponent = () => {
  return (
    <div className="grid h-48 grid-cols-4 mx-2 gap-4">
      <div className="col-start-1 flex items-center justify-center">
        <div className="h-36 w-36 rounded-full bg-slate-100"></div>
      </div>
      <div className="col-span-3 flex flex-col justify-center gap-2">
        <h2 className="text-2xl font-semibold">Nombre de autor</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minima
          expedita eos debitis, velit voluptas cum illo dolorem reiciendis quia.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
