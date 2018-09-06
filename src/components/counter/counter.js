import React, {Component} from 'react'
import CounterButton from './counter-button'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 1,
            incerementDisabled: false,
            decrementDisabled: false,
        }
        this.incerement = this.incerement.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    componentDidMount() {
        console.log('fuction componentDidMount called');
    }

    incerement(){
        let newCount = this.state.count + 1;
        let newIncerementDisabled = newCount === 10 
        this.setState({count: newCount, incerementDisabled: newIncerementDisabled})
    }

    decrement(){
        let newCount = this.state.count - 1;
        let newDecrementDisabled = newCount === 1 
        this.setState({count: newCount, decrementDisabled: newDecrementDisabled})
    }

    componentDidUpdate(prevProps, previousState) {
        console.log('This is previous state in componentDidUpdate : ', previousState);
    }

    render(){
        return(
        <div> 
            <div>
                <CounterButton type='I' handleButtonClick={this.incerement} isDisabled = {this.state.incerementDisabled} />
                <span> {this.state.count} </span>
                <CounterButton type='D' handleButtonClick={this.decrement} isDisabled = {this.state.decrementDisabled} />
            </div>
            <div>
                <textarea> </textarea>
                <select defaultValue={'lime'}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                </select>
                <input type="file" />
            </div>
        </div>
        )
    }
}