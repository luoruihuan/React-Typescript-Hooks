import * as React from 'react'

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
	text: string;
	complete: boolean;
}

function TodoList(): JSX.Element {
	const [ value, setValue] = React.useState<string>("");
	const [ todos, setTodos] = React.useState<ITodo[]>([]);

	const handleSubmit = (e: FormElem): void => {
		e.preventDefault();
		setValue("");
		addTodo(value);
	}

	const addTodo = (text: string): void => {
		const newTodos: ITodo[] = [...todos, { text, complete: false }];
		setTodos(newTodos)
	}

	const completeTodo = (index: number): void => {
		const newTodos: ITodo[] = todos;
		newTodos[index].complete = !newTodos[index].complete;
		setTodos([...newTodos]);
	}

	const removeTodo = (index: number): void => {
		const newTodos: ITodo[] = todos;
		newTodos.splice(index, 1);
		setTodos([...newTodos]);
	}

	return (
		<React.Fragment>
			<div className='container'>
				<form role="form"  onSubmit = { handleSubmit }>
					<div className="form-group">
						<label htmlFor="value">待办事项：</label>
						<input type="text"
							className="form-control" id="value"
							placeholder="输入代办事项"
							value={value}
							onChange={e => setValue(e.target.value)}
							required />
						<hr/>
						<button  type="submit" className="btn btn-primary">提交</button>
					</div>
				</form>

				<table className="table table-bordered">
					<tbody>
						<tr className="text-info">
							<th className="text-center">序号</th>
							<th className="text-center">待办内容</th>
							<th className="text-center">状态</th>
							<th className="text-center">操作</th>
						</tr>
						{
							todos.map((todo: ITodo, index: number) => (
								<tr className="text-center" key={index}>
									<td>任务{index+1}</td>
									<td style={{ textDecoration: todo.complete ? 'line-through' : '' }}>			{todo.text}
									</td>
									<td>{todo.complete?'已完成':'未完成'}</td>
									<td>
										<button className="btn btn-info btn-sm"
											onClick={ () => completeTodo(index)}>
											{ todo.complete ? '未完成':'完成' }
										</button>&nbsp;
										<button className="btn btn-danger btn-sm" onClick={ () => removeTodo(index)}>删除</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</React.Fragment>
	)
}

export { TodoList};
