import React from 'react'
import ListItem from './ListItem';

const Column = () => {
  return (
    <div>
      <div>
        <h3>To Do</h3>
        <p></p>
      </div>
      <button>Add new card</button>
      <ListItem />
    </div>
  );
}

export default Column
