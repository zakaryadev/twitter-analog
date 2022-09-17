import "./PostListItem.css";

export default function PostListItem () {
  const { label, isDelete, onToggleImportant, onToggleLike } = this.props;
  let classNames =
    "app-list-item align-items-center d-flex justify-content-between";
  if (this.state.important) {
    classNames += " important starred";
  }
  if (this.state.liked) {
    classNames += " liked";
  }
  return (
    <div className={classNames}>
        <span className="app-list-item-label" onDoubleClick={this.isLiked}>
          {label}
        </span>
      <div className="d-flex justify-content-center align-items-center btn-gr">
        <button
          type="button"
          className="btn-star btn btn-sm btn-primary"
          onClick={this.onImportant}
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
          onClick={this.isLiked}
        >
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
}
