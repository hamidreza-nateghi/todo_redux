import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    let tempItems = this.props.items;
    tempItems.push(temp);
    this.setState({ items: tempItems, id: id });
  }

  deleteTodo(id) {
    let tempItems = this.props.items.filter(item => item.id !== id);
    this.setState({ items: tempItems });
  }

  render() {
    return (
      <div>
        <Input addTodo={(text) => this.props.onAddTodo(text)} />
        <List items={this.props.items}
          callback={(id) => this.props.onDeleteTodo(id)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (text) => dispatch({ type: 'ADD_TODO', payload: text }),
    onDeleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
