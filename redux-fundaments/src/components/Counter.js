import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = (props) => {

    return (
        <div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <h1>{props.counter}</h1>
            <p>
                { props.name }
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter);