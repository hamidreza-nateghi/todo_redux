import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ task: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input value={this.state.task} onChange={this.onChange} />
      </form >
    );
  }
}

export default Input;
