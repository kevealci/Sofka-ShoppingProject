import HomePage from './pages/HomePage';
import {ProductProvider} from './components/ProviderTest'
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
