import './App.css'
import Table from './components/Table';
import {products} from './ProductsJson.json';
import {upgrades} from './UpgradesJson.json';


function App() {
  return (
    <main>
      <Table table={products} />
    </main>
  )
}

export default App
