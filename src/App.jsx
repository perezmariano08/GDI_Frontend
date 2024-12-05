import { PrimeReactProvider } from 'primereact/api';
import Routes from './routes/Routes';

function App() {
  return (
    <PrimeReactProvider>
      <Routes/>
    </PrimeReactProvider>
  )
}

export default App
