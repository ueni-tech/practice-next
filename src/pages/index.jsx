import { useState } from "react"

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

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

  const onClickComplete = index => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = index => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
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
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map((completeTodo, index) => (
            <li key={completeTodo}>
              <div className="list-row">
                <p className="todo-item">{completeTodo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
