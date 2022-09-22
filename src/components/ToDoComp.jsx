import React from "react";

const ToDoComp = (props) => {
  //   const deleteItem = (e) => {
  //     console.log("deleted");
  //   };
  return (
    <>
      <li className='items'>
        {props.listText}
        <i
          className='fas fa-times'
          onClick={() => {
            props.delete(props.id);
          }}
        ></i>
      </li>
    </>
  );
};

export default ToDoComp;
