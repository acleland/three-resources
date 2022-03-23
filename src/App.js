import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main/Main';
import Nav from './components/Nav/Nav';
import StarWars from './views/StarWars/StarWars';
import Bunnies from './views/Bunnies/Bunnies';
import Doughnuts from './views/Doughnuts/Doughnuts';

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
          <Route path="/fuzzybunnies">
            <Bunnies />
          </Route>
          <Route path="/doughnuts">
            <Doughnuts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
