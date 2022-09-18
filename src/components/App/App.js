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
          like: false,
          id: 1,
        },
        {
          label: "Going to learn AngularJS",
          important: false,
          like: false,
          id: 2,
        },
        {
          label: "Going to Library",
          important: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.state.data.length + 1,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleLike(id) {
    this.setState(({ data }) => {
      const idx = data.findIndex((elem) => elem.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, like: !oldItem.like };
      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const idx = data.findIndex((elem) => elem.id === id);
      const oldItem = data[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)];
      return {
        data: newArray,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  onFilter(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const Posts = data.length;
    const visiblePosts = this.onFilter(this.searchPost(data, term), filter);
    return (
      <div className="App">
        <AppHeader liked={liked} posts={Posts} />
        <div className="search-panel d-flex">
          <Search onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
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
