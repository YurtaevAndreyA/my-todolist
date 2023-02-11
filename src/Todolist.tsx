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
    let listItems = props.arList.length

        ? props.arList.map((elArList: ItemType) => {
            return (
                <li key={elArList.id}>
                    <input type="checkbox" checked={elArList.isDone}/>
                    <span>{elArList.name}</span>
                </li>
            )
        })

        : <span>Empty list</span>


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {listItems}
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