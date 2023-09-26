import { Link } from "react-router-dom";
import shoply from "/src/assets/shoply.jpg";

export default function Banner() {
  return (
    <Link to={"/1"}>
      <img
        className="w-full max-h-[780px] object-cover"
        src={shoply}
        alt="Thumbnail"
      />
    </Link>
  );
}
