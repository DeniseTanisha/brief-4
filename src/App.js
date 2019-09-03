import React from 'react';
import styles from'./App.css';
import { Link,  Router } from "@reach/router"; 
import AlbumComponent from './components/albums/albumComponent';
import Albums from "./assets/data/data"

 

const App = () => {
   state = {
    filteredAlbums =[]
   }; 
  
  //  filtredAlbums(genre) {
  //   return Albums.filter(album => album.genre === genre)
  //  };
   

  return ( 

    <div> 
      <h1> Albums Page</h1>

   <nav>
     <Link to="/">All</Link> {"    "}
     <Link to="punk">Punk</Link> {"     "}
     <Link to="reggae">Reggae</Link> {"     "}
     <Link to="classical">Classical</Link>
   </nav>

   <Router>
     <All path="/" />
     <Punk path="/punk" />
     <Reggae path="/reggae" />
     <Classical path="/classical" />
   </Router>

   </div> 
    ) }

    
const All = () => (
  <div>
    <h2>Welcome</h2>
     
    );
  }
}

  </div>
);

const Punk = () => (
  <div>
    <h2>Punk Music</h2>

  </div>
);

const Reggae = () => (
  <div>
    <h2>Reggae Music</h2>
  </div>
);

const Classical = () => (
  <div>
    <h2>Classical Music</h2>
  </div>
);


export default App;
