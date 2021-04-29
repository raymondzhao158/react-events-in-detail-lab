// Code CoordinatesButton Component Here
import React, {Component} from 'react';
class CoordinatesButton extends Component{

    handleCLick = event => {
        event.persist()
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render(){
        return(
         <button
            onClick={ this.handleCLick}
         >button</button>
          )
    }
}
export default CoordinatesButton
