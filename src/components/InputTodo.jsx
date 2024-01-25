const InputTodo = ({todoText, onChangeTodoText, onClickAdd}) => {
  return (
    <div className="input-area">
      <input type="text" placeholder="todoを入力" value={todoText} onChange={e => onChangeTodoText(e)} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}

export default InputTodo