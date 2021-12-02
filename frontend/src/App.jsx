import Navbar from './components/NavBar'
import { Outlet } from 'react-router';

function App() {
  return (
    <>
        <Navbar />
        <div className="container">
          <Outlet/>
        </div>
    </>
  );
}

export default App;
