import { Switch, Route } from 'react-router-dom';
import Guide from "./Guide";
import Main from './Main';

const Pager = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/tutorial' component={Guide}></Route>
    </Switch>
  );
}

export default Pager;