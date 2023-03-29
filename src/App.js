import Dbconnect from "./Dbconnect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import AddMusic from "./AddMusic";
import ChangeMusicDetail from "./ChangeMusicDetail";

function App() {
  return (
    <div>
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">< Dbconnect key="general" category="general"/></Route>
            <Route exact path="/business">< Dbconnect key="business" category="business"/></Route>
            <Route exact path="/entertainment">< Dbconnect key="entertainment" category="entertainment"/></Route>
            <Route exact path="/general">< Dbconnect key="general" category="general"/></Route>
            <Route exact path="/health">< Dbconnect key="health" category="health"/></Route>
            <Route exact path="/science">< Dbconnect key="science" category="science"/></Route>
            <Route exact path="/sports">< Dbconnect key="sports" category="sports"/></Route>
            <Route exact path="/technology">< Dbconnect key="technology" category="technology"/></Route>
            <Route exact path="/addmusic"><AddMusic/></Route>
            <Route exact path="/changeamusic/:empid">element={<ChangeMusicDetail/>}</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
