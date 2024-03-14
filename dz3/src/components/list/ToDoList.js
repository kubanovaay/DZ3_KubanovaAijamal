import React from 'react';
import Todo from '../todo/ToDo';
import classes from './ToDoList.module.css';


const TodoList = ({tasks, handleDelete}) => {
    return (
        <ul className={classes.list}>
            {
                tasks.map(item=> <Todo
                    key={item.id}
                    todo={item}
                    handleDelete={handleDelete}/>)
            }
        </ul>
    );
};

export default TodoList;