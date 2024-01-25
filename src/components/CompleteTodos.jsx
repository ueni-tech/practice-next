const CompleteTodos = ({completeTodos, onClickBack}) => {
  return (
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

  )
}

export default CompleteTodos