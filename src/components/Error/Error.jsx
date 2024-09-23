import { Link } from "react-router-dom";
import { BsEmojiDizzy } from "react-icons/bs";

function Error() {
  return (
    <div
      className="flex flex-col justify-center items-center py-[100px] gap-y-4
    "
    >
      <h1 className="flex gap-5 font-extrabold text-8xl">404 <BsEmojiDizzy size={"90px"}/></h1>
      <h3 className="font-ebold text-4xl">UH OH! You're lost.</h3>
      <p className="font-thin mx-6">
        The page you are looking for doess not exist. How you got here is a
        mystery. But you can click on the button to go to homepage.{" "}
      </p>
      <button
         >
        <Link
          className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
          to="/"
        >
          Home
        </Link>
      </button>
    </div>
  );
}

export default Error;
