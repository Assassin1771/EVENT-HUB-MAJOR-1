import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <div className="d-flex align-items-center border-bottom py-2">
                    <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                    <span><ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/></span>
                    </div>
                    </div>
                    </div>
                )
            })}
            <button className="btn btn-primary ms-2" style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;