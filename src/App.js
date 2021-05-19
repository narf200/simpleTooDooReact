import React, {useState} from 'react';

import './App.css';

function App() {
    const [text, setText] = useState('')

    const [todoList, setTodoList] = useState([
        {id: 1, text: 'купить молоко'}, {id: 2, text: 'позвонить домой'}, {id: 3, text: 'покушать'}
    ])


    function addTodo() {
        setTodoList([...todoList, {
            id: !todoList.length ? 1
                : todoList[todoList.length - 1].id + 1, text
        }])
        setText('')

    }

    function handleDelete(id) {
        setTodoList([...todoList.filter(todo => todo.id !== id)])
    }

    return (
        <div className="app">
            <div>
                <input onChange={e => setText(e.target.value)} value={text} type="text"/>
                <button onClick={() => addTodo()}>Добавить</button>
            </div>
            <ul>
                {todoList.map(({id, text}) =>
                    <li key={id} className="todo" onClick={() => handleDelete(id)}>{text}</li>
                )}
            </ul>
        </div>
    );


}


export default App;

