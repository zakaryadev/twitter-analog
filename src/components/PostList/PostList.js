import PostListItem from "../PostListItem";
import "./PostList.css";

const PostList = ({ posts, isDelete }) => {
  return (
    <ul className="app-list list-group">
      {posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <PostListItem key={id} {...itemProps} isDelete={() => isDelete(id)} />
        );
      })}
    </ul>
  );
};

export default PostList;
