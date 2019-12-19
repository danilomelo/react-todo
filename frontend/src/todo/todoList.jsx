import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, removeTask, markAsDone, markAsUndone, setLoading } from '../todo-actions'

class TodoList extends React.Component{
   componentDidMount(){
        this.props.search()
    }

    markAsDone = (id, index)=>{
        this.props.setLoading('done'+index)
        this.props.markAsDone(id, index)
    }

    markAsUndone = (id, index)=>{
        this.props.setLoading('undone'+index)
        this.props.markAsUndone(id, index)
    }

    render(){
        return (
            <div className="todoList">
            <h1>List</h1>
            <table className="table table-stripped">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            {
                this.props.tasks.map((t, k)=> (
                    <tr key={k}>
                        <td>
                            <span className={t.done? 'task-description-done' : ''}>{t.description} </span> 
                        </td>
                        <td>
                            <button className="btn btn-sm btn-danger" onClick={()=> this.props.removeTask(t._id, k)}> 
                                { (this.props.loading == 'remove'+k)? <i className="fa fa-spinner"></i> : <i className="fa fa-trash"></i> }
                            </button>
                            <button className="btn btn-sm btn-primary" onClick={()=> this.markAsDone(t._id, k)}> 
                                { (this.props.loading == 'done'+k)? <i className="fa fa-spinner"></i> : <i className="fa fa-check-square-o"></i> }
                            </button>
                            <button className="btn btn-sm btn-primary" onClick={()=> this.markAsUndone(t._id, k)}> 
                                { (this.props.loading == 'undone'+k)? <i className="fa fa-spinner"></i> : <i className="fa fa-square-o"></i> }
                            </button>
                        </td>
                    </tr>
                   )
                )
            }    
            </tbody>
            </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks : state.todo.list,
        loading: state.todo.loading
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        search, 
        removeTask, 
        markAsDone, 
        markAsUndone,
        setLoading
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)