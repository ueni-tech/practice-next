import { useState } from "react"

export default function Home() {
  const [incompleteTodos, setIncompleteTodos] = useState(["Todoです1", "Todoです2"])
  const [completeTodos, setCompleteTodos] = useState(["Todoでした1", "Todoでした2"])
  
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="todoを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map(incompleteTodo => (
            <li key={incompleteTodo}>
              <div className="list-row">
                <p className="todo-item">{incompleteTodo}</p>
                <button>完了</button>
                <button>削除</button>
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
