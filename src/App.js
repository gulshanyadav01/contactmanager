
import './App.css';
import Contacts from "./components/Contacts/Contacts"
import Header from "./components/Layout/Header";

// import { Provider } from "./Context"
import { Provider } from "./Context1"; 
import AddContact from "./components/Contacts/AddContact"

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding = "Contact Manager" />
        <AddContact/>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
