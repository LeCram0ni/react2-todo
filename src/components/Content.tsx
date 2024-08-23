import { useState, useEffect, Dispatch, SetStateAction } from "react";
import List from "./List";

export default function Content() {

    const local = localStorage.getItem("todos");
    const localInit: string[] = local ? JSON.parse(local) : ["Todo"];

    const [input, setInput] = useState(''); // '' ist Initialwert des Textfelds
    const [todos, setTodos] = useState<string[]>(localInit); // "Todo" ist Initialwert des ersten Todos
    const [first, setFirst] = useState<boolean>(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value); // Aktualisiert den State mit dem eingetippten String
    };

    const addTodo = () => {
        if (input.trim() === "") return; // wenn input leer, Abbruch

        if (first) {
            setTodos([input.trim()]);
        } else {
            setTodos(newTodo => [...newTodo, input.trim()]);
        }

        setFirst(false);

        setInput("");
    }


    const deleteTodo = (indexD: number) => {
        setTodos(delTodo => delTodo.filter((todo, index) => index !== indexD));
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
                    <h2>Things that need to be done</h2> : //if true         V else
                    <h2 style={{ color: '#8dff00' }}>No things need to be done</h2>}

                <ul>
                    <List todo={todos} deleteTodo={deleteTodo} />
                </ul>

            </div>
        </div>
    );
}
