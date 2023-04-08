import React from 'react';
import ListItem from './ListItem/ListItem.js';
import './List.css'

const List = ({ list }) => {
  console.log(list)
  
  return (
  <div className='list-wrap'>
    {list.map((item) => (
      <ListItem  key={item.idproducts} list={list} item={item} />
    ))}
  </div>
);
    }
export default List;