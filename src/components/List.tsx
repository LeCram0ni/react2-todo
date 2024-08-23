type ListProps = {
    todo: string[];
    deleteTodo: (index: number) => void;
}

export default function List({ todo, deleteTodo }: ListProps) {

    return (
        <>
            {todo.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span>
                    <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </>
    );
}
