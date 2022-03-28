
const reducer=( state= {},action) =>{
    switch(action.type){
        case 'GET_TODOS':
            return {
                ...state,
                loading:true
            }
        case 'TODOS_RECEIVED':
            return{
                ...state,
                loading:false,
                todos:action.json
            }

            default:
             return state;
    }
}

export default reducer;