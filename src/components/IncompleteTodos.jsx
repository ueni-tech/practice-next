const style = {
  border: "2px solid #aacfd0",
  width: "400px",
  "min-height": "200px",
  padding: "8px",
  margin: "8px",
  "border-radius": "8px"
}

const IncompleteTodos = ({ incompleteTodos, onClickComplete, onClickDelete }) => {
  return (
    <div style={style}>
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