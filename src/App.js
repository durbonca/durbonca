import { Switch, Route } from 'react-router-dom'
// import {HeaderContainer} from './containers'
import {Home, Projects} from './pages'
import './App.css';

function App() {
  return (
    <div>
      {/* <HeaderContainer/> */}

      <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route exact path="/projects" >
            <Projects/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
