import React from 'react'

class TarjetaFruta extends React.Component{
    
    state = {cantidad: 0}

    increment = () => this.setState({ cantidad: this.state.cantidad + 10 })

    decrement = () => this.setState({ cantidad: this.state.cantidad - 10 })

    clean = () => this.setState({ cantidad: 0 })
    
    render(){

        const hasItems = this.state.cantidad > 0

        const styles = {
            border: '2px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasItems ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFF',
            color: hasItems ? '#FFF' : '#000',
            transition: 'all 400ms ease-out'
        }

        return (
            <div style={styles}>
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

