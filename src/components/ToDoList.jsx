import React, { useState } from "react";
import ToDoComp from "./ToDoComp";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const InputEvent = (e) => {
    setItem(e.target.value);
  };
  const addButton = (e) => {
    e.preventDefault();
    setList((arr) => {
      return [...arr, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    console.log("delet", id, list);
    setList((arr) => {
      return arr.filter((arrElement, arrIndex) => {
        return arrIndex !== id;
      });
    });
  };

  return (
    <>
      <div className='main_body'>
        <div className='style_ball'></div>
        <div className='style_ball'></div>
        <div className='todo_body'>
          <h1>Easy To Do</h1>
          <form>
            <input
              type='text'
              name='item'
              id='item'
              onChange={InputEvent}
              value={item}
              placeholder='Add items...'
            />
            <button onClick={addButton}>
              <i className='fas fa-plus'></i>
            </button>
          </form>
          <div className='list_items'>
            <ul>
              {list.map((element, index) => {
                return (
                  <ToDoComp
                    listText={element}
                    key={index}
                    id={index}
                    delete={deleteItem}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
