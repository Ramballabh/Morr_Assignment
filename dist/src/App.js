import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Series from './Pages/Series';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component = {Home}/>
      <Route exact path='/Movies' component = {Movies}/>
      <Route exact path='/Series' component = {Series} />
      </Switch>
    </div>
  );
}

export default App;
