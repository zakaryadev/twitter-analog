import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import Search from "../SearchPanel";
import "./App.css";
import PostAddForm from "../PostAddForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to learn ReactJS",
          important: false,
          id: 1,
        },
        {
          label: "Going to learn AngularJS",
          important: false,
          id: 2,
        },
        {
          label: "Going to Library",
          important: false,
          id: 3,
        },
      ],
    };
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const idx = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, idx), ...data.slice(idx + 1)];
      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    console.log(body)
    const newItem = {
      label: body,
      important: false,
      id: this.state.data.length + 1,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    })
  }

  onToggleLike(id) {
    console.log(id);
  }

  onToggleImportant(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="search-panel d-flex">
          <Search />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          isDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
