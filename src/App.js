
import './App.css';
import Contacts from "./components/Contacts/Contacts"
import Header from "./components/Layout/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; 

// import { Provider } from "./Context"
import { Provider } from "./Context1"; 
import AddContact from "./components/Contacts/AddContact"
import NotFound from "./components/NotFound"
import EditContact from "./components/Contacts/EditContact"
function App() {
  return (
    <Provider>
    <Router basename = {process.env.PUBLIC_URL}>
      <div className="App bg-gray-900 h-auto">
        <Header branding = "Contact Manager" />
        <Switch>
          <Route  exact path = '/' component = {Contacts}/>
          <Route  path = "/AddContact" component = {AddContact}/>
          <Route exact path = "/contact/edit/:id" component = {EditContact}/>
          
          <Route component ={NotFound}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
