
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';
import {action,originals} from './urls'





function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={originals}title='Netflix Originals'/>
     <Rowpost url={action}title='Action' isSmall />
    
    

     
     

    </div>
  );
}

export default App;
