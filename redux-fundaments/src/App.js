//import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
//import Counter from './components/Counter';
//import Info from './components/Info';
//import Fruits from './components/Fruits';
//import Todo from './components/Todos';
//import Controller from './components/Controller';
import Blog from './components/Blog';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/*<Counter></Counter>
        <Info></Info>
        <Fruits></Fruits>
        <Todo></Todo>
        <Controller />*/}
        <Blog />
      </div>
    </Provider>
  )
}

export default App;
