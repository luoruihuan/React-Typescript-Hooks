import * as React from 'react'
import { TodoList } from './todoList'

interface IProps {
	name: string;
}

class App extends React.Component<IProps, {}> {
	render() {
		return (
			<React.Fragment>
				<h4 className='text-center'>这是另外一个组件:{this.props.name}</h4>
				<TodoList />
			</React.Fragment>
		)
	}
}

export { App };
