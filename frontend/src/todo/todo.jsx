import React from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoForm from './todoForm'
import TodoList from './todoList'

const url = 'http://localhost:3003/api/todos'

export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.onGetTasks = this.onGetTasks.bind(this)
        this.refresh = this.refresh.bind(this)
        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
    }

    refresh(){
        axios.get(url+'?sort=createdAt').then(this.onGetTasks)
    }

    onGetTasks(response){
        this.setState({tasks: response.data})
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm addTask={this.addTask} />
                <TodoList />
            </div>
        )
    }
}