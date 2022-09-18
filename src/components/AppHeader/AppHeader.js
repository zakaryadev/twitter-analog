import "./AppHeader.css";
const AppHeader = ({liked, posts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Zakarya Muratbaev</h1>
      <h2>{posts} posts, like {liked}</h2>
    </div>
  );
};

export default AppHeader;
