import { Link } from "react-router-dom";
import { BsEmojiDizzy } from "react-icons/bs";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 py-[100px]">
      <h1 className="flex gap-5 text-8xl font-extrabold">
        404 <BsEmojiDizzy size={"90px"} />
      </h1>
      <h3 className="font-ebold text-4xl">UH OH! You're lost.</h3>
      <p className="mx-6 font-thin">
        The page you are looking for doess not exist. How you got here is a
        mystery. But you can click on the button to go to homepage.{" "}
      </p>
      <button>
        <Link
          className="inline-flex items-center rounded-lg bg-orange-700 px-6 py-3 font-medium text-white hover:opacity-75"
          to="/"
        >
          Home
        </Link>
      </button>
    </div>
  );
}

export default Error;
