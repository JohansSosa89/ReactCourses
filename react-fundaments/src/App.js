import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
    <div>
        <TarjetaFruta name={'Sandia'} price={2.00}></TarjetaFruta>
        <br></br>
        <TarjetaFruta name={'Naranja'} price={1.50}></TarjetaFruta>
        <br></br>
        <TarjetaFruta name='Kiwi' price={3.00}></TarjetaFruta>
    </div>
)

export default App