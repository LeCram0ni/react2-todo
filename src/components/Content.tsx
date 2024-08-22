import List from "./List"

export default function Content() {
    return (
        <div id="full">
            <div id="content">
                <h1>
                    Your personal Todo List
                </h1>
                <input className="todo-textfield" type="text"></input>
                <h2>Things that needs to be done</h2>
                <List />
            </div>
        </div>
    );
}
