import React from 'react';
import './App.css';
import Todolist, {ItemType} from "./Todolist";

function App() {
    const titleTodolist_1: string = 'What to learn';
    const titleTodolist_2: string = 'What to bay';
    const titleTodolist_3: string = 'What to give';

    const arTasks1: ItemType[] = [
        {id: 1, isDone: true, name: 'HTML&CSS'},
        {id: 2, isDone: false, name: 'TS'},
        {id: 3, isDone: false, name: 'React'},
    ]

    const arTasks2: ItemType[] = [
        {id: 1, isDone: true, name: 'Vodka'},
        {id: 2, isDone: true, name: 'Salt'},
        {id: 3, isDone: true, name: 'Bread'},
    ]

    const arTasks3: ItemType[] = [
        {id: 1, isDone: false, name: 'First'},
        {id: 2, isDone: true, name: 'Second'},
        {id: 3, isDone: false, name: 'Third'},
    ]


  return (
      <div className="App">
        <Todolist title={titleTodolist_1} arList={arTasks1}/>
        <Todolist title={titleTodolist_2} arList={arTasks2}/>
        <Todolist title={titleTodolist_3} arList={arTasks3}/>
      </div>
  );
}

export default App;


//Передать значения с помощью объекта props на сленге - (о)прокинуть пропс
//Холивар [holy war - священная война] - спор, в котором каждый из
// участников полностью уверен в собственной правоте и даже не пытается
// понять мнение противника

//Холивар — это затяжной и зачастую бессмысленный спор на острую и горячую
// тему, на которую каждому есть что сказать. Спорщики с пеной у рта защищают
// свои позиции, между которыми для стороннего наблюдателя практически нет
// никакой разницы.