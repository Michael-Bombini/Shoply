import success from "../../assets/success.svg";
interface Props {
  message: string;
}

export default function Success({ message }: Props) {
  return (
    <div className="flex flex-col gap-6 my-20 justify-center items-center">
      <img src={success} loading="lazy" alt="" />
      <h2 className="bg-gradient-to-br  from-[#32782f] to-green-600 text-transparent bg-clip-text text-3xl font-bold">
        Success!
      </h2>
      <p className="text-xl text-black/70 text-center max-w-lg">{message}</p>
    </div>
  );
}
