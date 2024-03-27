import { Blog } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-[1200px] pt-12">
          <div className="col-span-9">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-gray-400 pt-3 font-light">
              Posted on 2nd Feb 2024
            </div>
            <div className="text-xl pt-4">{blog.content}</div>
          </div>
          <div className="col-span-3">
            <div className="text-gray-600 text-lg">Author</div>
            <div className="flex">
              <Avatar name={blog.author.name || "Anonymous"} size={8} />
              <div className="text-xl font-bold px-2 flex flex-col justify-center">
                {blog.author.name || "Anonymous"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
