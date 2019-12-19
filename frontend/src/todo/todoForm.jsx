import React from 'react'
import Column from '../template/grid'
import { changeDescription, search, addTask } from '../todo-actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div role="form" className="todoForm row">
                <Column numbers="12,8,4">
                    <input type="text" placeholder="tarefa" className="form-control" onChange={this.props.changeDescription} value={this.props.description}/>
                </Column> 

                <Column numbers="12,2,2">
                    <button className="btn btn-primary" onClick={()=>this.props.search(this.props.description)}><i className="fa fa-search"></i></button>
                    <button className="btn btn-primary" onClick={()=> this.props.addTask(this.props.description)}>
                        <i className="fa fa-plus"></i>
                    </button>
                </Column>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        description: state.todo.description
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeDescription, search, addTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)