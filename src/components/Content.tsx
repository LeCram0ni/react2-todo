import { useState, useEffect } from "react";
import List from "./List";

export type TodoItem = {
    text: string;
    active: boolean;
};

export default function Content() {

    const local = localStorage.getItem("todos");
    const localInit: TodoItem[] = local ? JSON.parse(local) : [{ text: "Todo", active: false }];

    const [input, setInput] = useState(''); // '' ist Initialwert des Textfelds
    const [todos, setTodos] = useState<TodoItem[]>(localInit); // "Todo" ist Initialwert des ersten Todos

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value); // Aktualisiert den State mit dem eingetippten String
    };

    const addTodo = () => {
        if (input.trim() === "") return; // wenn input leer, Abbruch

        const newTodoItem: TodoItem = {
            text: input.trim(),
            active: true
        };

        setTodos(newTodo => [...newTodo, newTodoItem]);
        setInput("");
    }

    const deleteTodo = (indexD: number) => {
        setTodos(delTodo => delTodo.filter((_todo, index) => index !== indexD));
    }

    const toggleActive = (index: number) => {
        setTodos(prevTodos => prevTodos.map((item, i) =>
            i === index ? { ...item, active: !item.active } : item
        ));

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div id="full">
            <div id="content">

                <h1>Your personal Todo List</h1>

                <div className="todo-text-button">
                    <input className="todo-textfield" onChange={handleInput} type="text" value={input} />
                    <button className="todo-button" onClick={addTodo}>Add</button>
                </div>

                {todos.length !== 0 ? //if
                    <h2>Things that need to be done</h2> : //<if true      V if false
                    <h2 style={{ color: '#8dff00' }}>No things need to be done</h2>}

                <ul>
                    <List todo={todos} deleteTodo={deleteTodo} toggleActive={toggleActive} />
                </ul>

            </div>
        </div>
    );
}
