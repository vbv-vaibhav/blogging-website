import { Link, useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    setInterval(() => {
      localStorage.removeItem("token");
      navigate("/signin");
    }, 1000);
  };

  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer text-xl"
      >
        <div>All Blogs</div>
      </Link>
      <div className="flex">
        <div>
          <Link to={`/publish`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg duration-300 text-sm px-5 py-2.5 text-center me-2 mb-1"
            >
              New
            </button>
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg duration-300 text-sm px-5 py-2.5 text-center mb-1"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
