import React, { Component } from 'react';

import Item from './Item';

const List = ({ items, callback }) => {
  return (
    <ul>
      {items.map(item => <Item callback={() => callback(item.id)}>{item.text}</Item>)}
    </ul>
  );
}

export default List;
