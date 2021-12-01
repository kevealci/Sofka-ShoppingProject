import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="row mt-4 align-items-end">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
