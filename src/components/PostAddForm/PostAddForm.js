import React from 'react';

import "./PostAddForm.css";
const PostAddForm = ({addItem}) => {
      return (
        <div className="bottom-panel d-flex input-group">
          <input
            type="text"
            placeholder="What are you thinking about?"
            className="form-control new-post-label"
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              const valuego = document.querySelector(".new-post-label");
              addItem(valuego.value);
              valuego.value = "";
            }}
          >
            Twit
          </button>
        </div>
      );

}
export default PostAddForm;