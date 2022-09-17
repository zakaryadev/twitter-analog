import React from "react";

export default class PostStatusFilter extends React.Component {
  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-primary">All</button>
        <button className="btn btn-outline-primary border-1">Liked</button>
      </div>
    );
  }
}
