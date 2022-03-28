
import {connect} from 'react-redux';
import {getTodos} from '../actions';

let Button = ({getTodos}) =>{
    return(
        <div>
            <button onClick={getTodos}>Get Todos List</button>
        </div>
    )
}

const mapDispatchToProps ={
    getTodos :getTodos
}

Button = connect(null,mapDispatchToProps) (Button);

export default Button;