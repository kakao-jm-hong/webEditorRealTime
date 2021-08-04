import Main from './pages/Main';
import Editor from './pages/Editor';
import { BrowserRouter as Router, Route, Switch,/* Link*/ } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/editor' component={Editor} />
        {/* <Route path='/mypage' component={Mypage} /> */}
      </Switch>
  </Router>
  );
}

export default App;
