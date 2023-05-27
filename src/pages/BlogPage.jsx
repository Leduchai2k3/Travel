import Header from "../components/Header";

const BlogPage = () => {
  return (
    <div>
      <Header image={"ImageBlog.png"}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-3 text-white">
          <h3 className="text-[30px] font-medium">Blog</h3>
          <span>Home / Blog</span>
        </div>
      </Header>
    </div>
  );
};

export default BlogPage;
