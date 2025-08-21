import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

import { store } from './store';
import Rotas from './routes';
import { Container } from './style'


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Container/>
        <Rotas/>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
