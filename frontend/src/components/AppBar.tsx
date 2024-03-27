import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer"
      >
        <div>Blog</div>
      </Link>
      <div>
        <Avatar name="Vaibhav" size={8} />
      </div>
    </div>
  );
};

export default AppBar;
