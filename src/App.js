import './App.css';
import Pet from './modules/Pet/Pet';
import Search from './components/Search/Search'
const App=()=> {
  return (
    <div className="App">
      <h1>Stowarzyszenie Płock Przyjazny Psom</h1> 
      <Search/>
    </div>
  );
}

export default App;
