import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
             <div className="d-flex mb-2">
            <input  className="form-control bg-dark" value={userInput} type="text" onChange={handleChange} placeholder="Enter task" />
            <button className="btn btn-primary ms-2">Add</button>
            </div>
        </form>
    );
};

export default ToDoForm;