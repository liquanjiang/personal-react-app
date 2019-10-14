import React , { Component }from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock'
import SelectItem from './components/SelectItems'


class App extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { PayIncrease, PayDecrease } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <p>{this.props.tiger}</p>
                </header>
                <SelectItem />
                <Clock />
                <button onClick={PayIncrease}>升职加薪</button>
                <button onClick={PayDecrease}>迟到罚款</button>
            </div>
        );
    }

}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        tiger: state
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({ type: 'ADD' }),
        PayDecrease: () => dispatch({ type: 'MINUS' })
    }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App);
