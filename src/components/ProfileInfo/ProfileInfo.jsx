import React from "react";
import { useProductContext } from "../Context/Context";
import { Link } from "react-router-dom";

function ProfileInfo() {
  //   const { user, isAuthenticated,  } = useAuth0();
  const { isLoading, loginWithRedirect, logout, isAuthenticated, user } =
    useProductContext();
  if (isLoading) {
    return (
      <div className="text-center text-[30px] font-thin">
        <span> Loading Please Wait...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="m-auto w-[90%]">
        <Link
          to="/"
          className="m-2 flex items-center font-bold text-orange-600"
        >
          /Home
        </Link>
      </div>

      <div className="my-8 flex flex-col items-center justify-center text-center">
        {/* i am ProfileInfo */}
        <img className="mb-4 h-[200px] rounded-full" src={user?.picture} />
        <div className="text-start">
          <h2>
            Name: <span className="font-bold">{user?.name}</span>
          </h2>
          <h2>
            Username: <span className="font-bold">{user?.nickname}</span>
          </h2>
          <h2>
            E-mail: <span className="font-bold">{user?.email}</span>
          </h2>
        </div>
        {/* <p>{user.email}</p> */}
        <button
          className="mr-2 mt-4 rounded-lg bg-orange-700 px-4 py-2 text-sm font-bold text-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
