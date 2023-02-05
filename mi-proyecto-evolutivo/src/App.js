import './App.css';
import ComponenteA from './components/ComponenteA';

function App() {
  return (
    <div className="App">
      <ComponenteA 
        name="Alberto"
        surname="Chicote"
        email="achicote@email.com"
        online={true}
        />
      <ComponenteA 
        name="Ferran"
        surname="Adriá"
        email="fadria@email.com"
        online={false}
        />
    </div>
  );
}

export default App;
