import React from 'react';

const List = props => {
    return (
        <ul className="todo-container">
            {props.items.map((item, index) => {
                return (
                    <li
                        key={index}
                        className="single-todo"
                        onClick={() => {
                            // console.log(`something ${index}`)
                            props.handleClick(index);
                        }}
                    // onClick={props.handleClick.bind(item, index)}
                    >
                        {item}
                    </li>);
            })}
        </ul>
    );
};

export default List;