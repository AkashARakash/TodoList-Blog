import Addtodolist from './components/Addtodolist';
import Listcontainer from './components/Listcontainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Addtodolist/>
        <Listcontainer/>
      </div>
    </div>
  );
}

export default App;