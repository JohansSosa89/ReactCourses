import React from 'react';
import { connect } from 'react-redux';
import { addFruit } from '../redux/actions/fruitActions';

const Fruits = ({ fruits, addFruit }) => {

    const handlerSubmit = (e) => {
        e.preventDefault();
        const fruitName = e.target["fruitName"].value;
        e.target["fruitName"].value = '';
        addFruit(fruitName);
    };

    return (
        <div>
            <h1>Fruits</h1>
            <form action="" onSubmit={handlerSubmit}>
                <input type="text" name="fruitName" id="fruitName" placeholder='Agrega una Fruta'/>
                <button>Agregar</button>
            </form>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={fruit + index}>
                        {fruit}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fruits: state.fruits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFruit: (fruit) => dispatch(addFruit(fruit))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Fruits);