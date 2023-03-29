import Listing from './components/Listing';
import data from './components/data'
import './App.css';

function App() {
  return (
    <Listing items={data}/>
  );
}

export default App;
