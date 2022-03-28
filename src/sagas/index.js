import {put,takeLatest,all} from "@redux-saga/core/effects";


function* actionWacth(){
    yield takeLatest('GET_TODOS',fetchTodos)
}

function* fetchTodos(){

    const url='https://jsonplaceholder.typicode.com/todos';
    
    const data =yield fetch(url).then(response =>response.json());

    yield put({
        type:'TODOS_RECEIVED' ,json:data
    })
}


export default function* rootSaga(){
    yield all([
        actionWacth()
    ])
}
