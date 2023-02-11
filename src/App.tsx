import React, {useState} from 'react';
import './App.css';
import Todolist, {ItemType} from "./Todolist";

function App() {
    const titleTodolist: string = 'What to learn';

    let [arTasks, setArTasks] = useState<ItemType[]>([
        {id: 1, isDone: true, name: 'HTML&CSS'},
        {id: 2, isDone: false, name: 'TS'},
        {id: 3, isDone: false, name: 'React'},

    ])

    const removeTask = (idTask: number) => {
        setArTasks(arTasks.filter(task => task.id !== idTask))
    }

    return (
        <div className="App">
            <Todolist
                title={titleTodolist}
                arList={arTasks}
                removeItem={removeTask}
            />
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