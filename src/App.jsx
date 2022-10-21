import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterApp from './components/CounterApp'

function App() {

  return (
    <div className="App">
      <CounterApp value={ 0 } />
    </div>
  )
}

export default App
