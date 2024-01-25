import { useState } from "react"

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todoです1", "Todoです2"])
  const [completeTodos, setCompleteTodos] = useState(["Todoでした1", "Todoでした2"])

  const onChangeTodoText = e => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = index => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="todoを入力" value={todoText} onChange={ e => onChangeTodoText(e)} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((incompleteTodo, index) => (
            <li key={incompleteTodo}>
              <div className="list-row">
                <p className="todo-item">{incompleteTodo}</p>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map(completeTodo => (
            <li key={completeTodo}>
              <div className="list-row">
                <p className="todo-item">{completeTodo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
