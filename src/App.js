
import './App.css';
import Contact from "./components/Contact"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <Header branding = "Contact Manager" />
      <Contact name = "gulshan"
        phone = "8860098313"
        email = "gulshany01@gmail.com"
      />
    </div>
  );
}

export default App;
