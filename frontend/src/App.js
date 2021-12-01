import { NavBar } from './components/NavBar.jsx';
import { ShoppingCart } from './Pages/ShoppingCart.jsx';
import { ShoppingProvider } from './components/ShoppingProvider';

function App() {
  return (
    <>
      <ShoppingProvider>
        <NavBar />
        <ShoppingCart />
      </ShoppingProvider>
    </>
  );
}

export default App;
