import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import Nav from './components/Nav/Nav';
import StarWars from './views/StarWars/StarWars';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/starwars">
            <StarWars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
