import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
