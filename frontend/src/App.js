import HomePage from './pages/HomePage';
import {ShoppingProvider} from './components/ShoppingProvider'


function App() {
  return (
    <>
      <ShoppingProvider>
         <HomePage />
      </ShoppingProvider>
    </>
  );
}

export default App;
