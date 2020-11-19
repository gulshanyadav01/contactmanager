
import './App.css';
import Contacts from "./components/Contacts"
import Header from "./components/Header";

// import { Provider } from "./Context"
import { Provider } from "./Context1"; 

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding = "Contact Manager" />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
