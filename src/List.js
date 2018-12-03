import React from 'react';

const List = props => {
    return (
        <ul className="todo-container">
            {props.items.map((item, index) => {
                return (<li className="single-todo"
                    key={index}>
                    {item}
                </li>);
            })}
        </ul>
    );
};

export default List;