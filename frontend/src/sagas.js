import {all, takeEvery, put, call} from 'redux-saga/effects'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos';

export default function* root(){
    yield all([
        takeEvery('ASYNC_SEARCH_TODO', saga_search_todo),
        takeEvery('ASYNC_LOADING', setLoading),
        takeEvery('ASYNC_MARK_AS_UNDONE', markAsUnDone),
        takeEvery('ASYNC_MARK_AS_DONE', markAsDone)
    ])
}

function* saga_search_todo(action){
    try{

        const search_param = action.payload? `&description__regex=/${action.payload}/`: '';
        const response = yield call(axios.get, ( `${URL}?sort=-createAt${search_param}` ))

        yield put({ type: 'SEARCH_TODO', payload: response })

    }catch(e){
        console.log(e)
    }
}

function* setLoading(action){
    yield put({type: 'LOADING', payload: action.payload})
}

function* markAsUnDone(action){
    const response = yield call(axios.put, `${URL}/${action.payload.id}`, {done: false})

    yield put({type: 'MARK_AS_UNDONE', payload: {data: response.data, index: action.payload.index}})
    yield setLoading({type: 'LOADING', payload: ''})
}

function* markAsDone(action){
    const response = yield call(axios.put, `${URL}/${action.payload.id}`, {done: true})

    yield put({type: 'MARK_AS_DONE', payload: {data: response.data, index: action.payload.index}})
    yield setLoading({type: 'LOADING', payload: ''})
}