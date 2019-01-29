import React,{Component} from 'react'
import AddTodo from '../containers/AddTodo'

const App=()=>(
    <div>
        <h1>Redux To-Do-List</h1>
        <AddTodo />
        <VisibleTodoList />
    </div>
)


/*
class App extends Component{

    render(){
        return(
            <div>
            <h1>Redux To-Do-List</h1>
        </div>
        )
    }
}
*/

export default App