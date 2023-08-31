
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';
import {action,originals,romance,horror,trending} from './urls'





function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={originals}title='Netflix Originals'/>
     <Rowpost url={trending}title='Trending' isSmall />
     <Rowpost url={action}title='Action' isSmall />
     <Rowpost url={romance}title='Romance' isSmall />
     <Rowpost url={horror}title='Horror' isSmall />

      
      
    
    

     
     

    </div>
  );
}

export default App;
