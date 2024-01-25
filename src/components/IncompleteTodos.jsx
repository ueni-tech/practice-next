const IncompleteTodos = ({incompleteTodos, onClickComplete, onClickDelete}) => {
  return (
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

  )
}

export default IncompleteTodos