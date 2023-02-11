import React from 'react';

export type ItemType = {
    isDone: boolean
    name: string
    id: number
}

type TodolistPropsType = {
    title: string
    arList: ItemType[]
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
                <li key={props.arList[0].id}>
                    <input type="checkbox" checked={props.arList[0].isDone}/>
                    <span>{props.arList[0].name}</span>
                </li>
                <li key={props.arList[1].id}>
                    <input type="checkbox" checked={props.arList[1].isDone}/>
                    <span>{props.arList[1].name}</span>
                </li>
                <li key={props.arList[2].id}>
                    <input type="checkbox" checked={props.arList[2].isDone}/>
                    <span>{props.arList[2].name}</span>
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

// Когда мы задаем свой тип - неважно в каком порядке идут свойства в нем

// Создаем тип не в компоненте (не в коем-случае), а выше компоненты