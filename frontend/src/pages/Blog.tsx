import AppBar from "../components/AppBar";
import FullBlog from "../components/FullBlog";
import Skeleton from "../components/Skeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
