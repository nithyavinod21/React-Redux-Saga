import Button from "../components/Button"
import Loading from "../components/Loading"
import Todos from "../components/Todos"


const App =() =>{
    return(
        <div style={{textAlign:'center'}}>
            <Button />
            <Loading />
            <Todos />
        </div>
    )
}

export default App