import React from 'react';
import styles from './TarjetaFruta.module.css';

class TarjetaFruta extends React.Component{
    
    state = {cantidad: 0}

    increment = () => this.setState({ cantidad: this.state.cantidad + 10 })

    decrement = () => this.setState({ cantidad: this.state.cantidad - 10 })

    clean = () => this.setState({ cantidad: 0 })
    
    render(){

        const hasItems = this.state.cantidad > 0;
        const activeClass = hasItems ? styles['card-active'] : '';
        const cssClass = `${styles.card} ${activeClass}`;

        return (
            <div className={cssClass}>
                <h3>{ this.props.name }</h3>
                <hr></hr>
                <div>Cantidad: { this.state.cantidad }</div>
                <button onClick= { this.increment }>+</button>
                <button onClick= { this.decrement }>-</button>
                <button onClick= { this.clean }>Limpiar</button>
                <p>$ { this.props.price }</p>
                <p>
                    Total: { this.props.price * this.state.cantidad }
                </p>
            </div>
        )
    }
}

export default TarjetaFruta

