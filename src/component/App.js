import React, { Component } from 'react';

import Input from './Input';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 0, text: 'Wash Dishes' },
        { id: 1, text: 'Do laundry' },
        { id: 2, text: 'Buy groceries' }
      ],
      id: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(text) {
    let id = this.state.id + 1;
    let temp = { id: id, text: text };
    let tempItems = this.state.items;
    tempItems.push(temp);
    this.setState({ items: tempItems, id: id });
  }

  deleteTodo(id) {
    let tempItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: tempItems });
  }

  render() {
    return (
      <div>
        <Input addTodo={this.addTodo} />
        <List items={this.state.items} callback={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
