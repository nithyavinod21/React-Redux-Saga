import {connect} from 'react-redux' ;

let Todos = ({todos}) => {
    return(
      todos
      ?
      todos.map((item,index)=>{
          return(
              <div key={index}>
                  {item.title} -isComplete :{item.completed}
              </div>
          )
      })

      :null
    )
}

const mapStateToProps =(state)=>({
    todos :state.todos
})

Todos = connect(mapStateToProps,null)(Todos);
export default Todos;
