import noResult from "../../assets/noresult.png";
interface Props{
  message: string;
}

export default function NoResult({message}: Props) {
  return (
    <div className="flex flex-col gap-6 my-20 justify-center items-center">
      <img src={noResult} loading="lazy" alt="" />
      <h2 className="bg-gradient-to-br  from-[#DC6161] to-red-600 text-transparent bg-clip-text text-3xl font-bold">
        Ooops!
      </h2>
      <h3 className="text-xl text-black/70 text-center max-w-sm">
        {message}
      </h3>
    </div>
  );
}
