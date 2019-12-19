import { combineReducers } from 'redux'

const INITIAL_VALUE = {
    description: '',
    loading: '',
    list: [ ]
}


function reducer(state = INITIAL_VALUE, action){
    switch (action.type) {
        case 'CLEAR':
            return {
                ...state,
                description: ''
            }
        case 'CHANGE_DESCRIPTION':
            return {
                ...state,
                description : action.payload
            }
        case 'SEARCH_TODO':
            return {
                ...state,
                list: action.payload.data
            }

        case 'ADD_TASK':
            return {
                ...state,
                list: action.payload.data
            }
        case 'REMOVE_TASK':
            let list = [
                ...state.list
            ]

            list.splice(action.payload.index, 1);

            return {
                ...state, 
                list: list
            }

        case 'MARK_AS_DONE':
        case 'MARK_AS_UNDONE':
            let _list = [
                ...state.list
            ];

            _list.splice(action.payload.index, 1, action.payload.data)

            return {
                ...state, 
                list: _list
            }

        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}

export default combineReducers({
    todo: reducer
})