import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id: number;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b-[1.5px] border-gray-200 pb-4 w-screen max-w-[800px] cursor-pointer">
        <div className="flex">
          <div className="flex flex-col justify-center">
            <Avatar name={authorName} />
          </div>
          <div className="font-extralight px-2 flex flex-col justify-center">
            {authorName}
          </div>
          <div className="text-[5px] text-gray-600 flex flex-col justify-center">
            &#9679;
          </div>
          <div className="pl-2 font-thin text-gray-500 flex flex-col justify-center">
            {publishDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">
          {content.slice(0, 100) + `${content.length > 100 ? "..." : ""}`}
        </div>
        <div className="text-gray-400 text-sm font-extralight pt-4">{`${Math.ceil(
          content.length / 100
        )} minute read`}</div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size = 6 }: { name: string; size?: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-300 rounded-full`}
    >
      <span className="font-medium text-gray-600">{name[0]}</span>
    </div>
  );
}

export default BlogCard;
