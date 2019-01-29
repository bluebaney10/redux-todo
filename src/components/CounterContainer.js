import React from 'react'
import {connect} from "react-redux";

class CounterContainer extends React.Component{
   
    render(){
        return(
            <div>
            <label>{this.props.counter}</label>
            <button onClick={this.props.count}>Add</button>
          </div>
        )
    }

}

//action
const add = (value) => {
    return { type: 'ADD', payload: value }
  }
  

const mapStateToProps = (state) => {
    return {
      counter: state.counter,
    }
  }
  
  //dispatch count
  const mapDispatchToProps = (dispatch) => {
    return {
      count: () => dispatch(add(1))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
//export default connect(mapDispatchToProps)(CounterContainer);