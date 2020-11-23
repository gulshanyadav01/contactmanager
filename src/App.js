
import './App.css';
import Contacts from "./components/Contacts/Contacts"
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

// import { Provider } from "./Context"
import { Provider } from "./Context1"; 
import AddContact from "./components/Contacts/AddContact"
import NotFound from "./components/NotFound"
function App() {
  return (
    <Provider>
    <Router>
      <div className="App">
        <Header branding = "Contact Manager" />
        <Switch>
          <Route exact path = '/' component = {Contacts}/>
          <Route exact path = "/AddContact" component = {AddContact}/>
          <Route component ={NotFound}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
