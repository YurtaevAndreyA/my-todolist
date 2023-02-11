import React from 'react';

type TodolistPropsType = {
    title: string
}

const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/>
                    <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" checked={false}/> <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;


// Вместо:
// const Todolist = (props: TodolistPropsType) => {
// можно писать:
// const Todolist: React.FC<TodolistPropsType> = (props) => {
// или даже:
// изменим немного импорт:
// import React, {FC} from 'react'
// и
// const TodoList: FC<TodolistPropsType> = (props) => {
// Такой вариант более "взрослый" относительно первоначального :)