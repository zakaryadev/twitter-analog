import React from 'react';

import "./PostAddForm.css";
export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState(({value} )=> ({value: e.target.value}));
  }

  onSubmit(e) {
      e.preventDefault();
      if(this.state.value != '') {
        this.props.addItem(this.state.value);
        this.setState({
          value: "",
        })
      }
  }


  render() {
    return (
      <form className="bottom-panel d-flex input-group">
        <input
          type="text"
          placeholder="What are you thinking about?"
          className="form-control new-post-label"
          onChange={this.onChange}
          value={this.state.value}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Twit
        </button>
      </form>
    );
  }
}