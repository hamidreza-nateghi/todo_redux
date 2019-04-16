import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <li>{this.props.children}</li>
        <button onClick={this.props.callback}>Delete</button>
      </div>
    );
  }
}

export default Item;
