const style = {
  "background-color": "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  "border-radius": "8px",
}

const InputTodo = ({ todoText, onChangeTodoText, onClickAdd, disabled }) => {
  return (
    <div style={style}>
      <input disabled={disabled} type="text" placeholder="todoを入力" value={todoText} onChange={e => onChangeTodoText(e)} />
      <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default InputTodo