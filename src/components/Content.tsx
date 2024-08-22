import { SetStateAction, useState } from "react";
import List from "./List";

export default function Content() {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    }










    return (
        <div id="full">
            <div id="content">
                <h1>
                    Your personal Todo List
                </h1>
                <div className="todo-text-button">
                    <input className="todo-textfield" type="text" value={inputValue} onChange={handleInput} />
                    <button className="todo-button">Add</button>
                </div>
                <h2>Things that need to be done</h2>
                <List />
            </div>
        </div>
    );
}
