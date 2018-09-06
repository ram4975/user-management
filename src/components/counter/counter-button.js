import React, {Component} from 'react'

export default class CounterButton extends Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps, previousState) {
        console.log('This is previous props in componentDidUpdate : ', prevProps);
    }

    render(){
        let buttonText = this.props.type === 'I' ? '+' : '-';
        return(
            <button 
                disabled={this.props.isDisabled} 
                onClick={this.props.handleButtonClick}>
                {buttonText} 
            </button>
        )
    }
}