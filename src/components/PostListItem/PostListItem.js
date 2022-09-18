import "./PostListItem.css";

const PostListItem = ({ label, isDelete, onToggleImportant, onToggleLike, important, like })  => {
  let classNames =
    "app-list-item align-items-center d-flex justify-content-between";
  if (important) {
    classNames += " important starred";
  }
  if (like) {
    classNames += " liked";
  }
  return (
    <div className={classNames}>
        <span className="app-list-item-label" onDoubleClick={onToggleLike}>
          {label}
        </span>
      <div className="d-flex justify-content-center align-items-center btn-gr">
        <button
          type="button"
          className="btn-star btn btn-sm btn-primary"
          onClick={onToggleImportant}
        >
          <i className="fa-regular fa-star"></i>
        </button>
        <button
          type="button"
          onClick={isDelete}
          className="btn-trash btn btn-sm btn-primary"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-heart btn-primary"
          onClick={onToggleLike}
        >
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default PostListItem;