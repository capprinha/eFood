import {BrowserRouter} from 'react-router-dom'
import Rotas from './routes';
import { Container } from './style'


function App() {
  return (
    <>
      <BrowserRouter>
        <Container/>
        <Rotas/>
      </BrowserRouter>
    </>

  );
}

export default App;
