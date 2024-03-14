import React, { useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/list/ToDoList';
import Button from '../../components/button/Button';

const MainPage = () => {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false }
    ]);
    const [inputTask, setInputTask] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleShow = () => {
        setShow(!show);
    };

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        setTasks(prev => [
            ...prev,
            { id: prev.length + 1, title: inputTask, completed: false }
        ]);
    };

    const handleDelete = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            {show &&
                <Modal
                    handleShow={handleShow}
                    onChangeInputTask={onChangeInputTask}
                    handleAdd={handleAdd}
                />
            }

            <Input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
            />

            <TodoList tasks={filteredTasks} handleDelete={handleDelete} />

            <Buttons />
            <Button title={'Открыть'} action={handleShow} />
            {/*<Header navBar={navBar}/>*/}
            {/*<User name={'Bakyt'} age={18}/>*/}
            {/*<User name={'Kuban'} age={30}/>*/}
            {/*<User name={'Ermek'} age={10}/>*/}
            {/*<Input/>*/}
            {/*<Example>*/}
            {/*    <p style={{color: 'red', fontSize: '20px'}} >User</p>*/}
            {/*    <p>Age</p>*/}
            {/*</Example>*/}
        </>
    );
};

export default MainPage;

