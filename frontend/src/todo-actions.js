import axios from "axios";

const URL = 'http://localhost:3003/api/todos';

export function changeDescription(e){
    return [
        { type: 'CHANGE_DESCRIPTION', payload: e.target.value },
        search(e.target.value)
    ]
}

export function search(description){
    return { type: 'ASYNC_SEARCH_TODO', payload: description }
}

export function addTask(description){
    return (dispatch)=>{
        axios.post(URL, {description})
        .then((response)=> dispatch({type: 'ADD_TODO', payload: response.data}))
        .then(()=> dispatch(search()))
        .then(()=> dispatch(clear()))
    }
}

export function removeTask(id, index){
    const request = axios.delete(`${URL}/${id}`).then((response)=>{
        return {
            ...response,
            index
        }
    })

    return {
        type: 'REMOVE_TASK',
        payload: request
    }
}

export function markAsUndone(id, index){
    return {
        type: "ASYNC_MARK_AS_UNDONE",
        payload: {
            id,
            index
        }
    }
}

export function markAsDone(id, index){
   return {
        type: "ASYNC_MARK_AS_DONE", 
        payload: {
            id,
            index
        }
    }

}

function clear(){
    return {
        type: 'CLEAR', 
        payload: {
            description: ''
        }
    }
}

export function setLoading(id){
    return { type: 'ASYNC_LOADING', payload: id }
}