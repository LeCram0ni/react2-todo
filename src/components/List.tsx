import { TodoItem } from "./Content";

type ListProps = {
    todo: TodoItem[];
    deleteTodo: (index: number) => void;
    toggleActive: (index: number) => void;
}

export default function List({ todo, deleteTodo, toggleActive }: ListProps) {

    return (
        <>
            {todo.map((todo, index) => (
                <li className={`todo-item-${todo.active ? "active" : "inactive"}`} onClick={() => toggleActive(index)} key={index}>
                    <span>{todo.text}</span>
                    <button className="delete-button" onClick={(e) => { e.stopPropagation(); deleteTodo(index) }}>Delete</button>
                </li>
            ))}
        </>
    );
}
