import {InformationCard} from './pages/InformationCard'
import {Navbar} from './components/Navbar'
import {ShoppingProvider} from './components/ShoppingProvider'


function App() {
  return (
    <>
      <ShoppingProvider>
        <Navbar/>      
        <InformationCard/>
      </ShoppingProvider>
    </>
  );
}

export default App;
