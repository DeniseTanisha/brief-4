import React from 'react';
import './App.css';
import { Link,  Router } from "@reach/router";
// import Page from "./container/PageContainer";

// let Home = () => <div>Home</div>
// let Punk = () => <div>Punk</div>
// let Reggae = () => <div>Reggae</div>
// let Classical = () => <div>Classical</div>


const App = () => {
    return ( 

    <div> 
      <h1> Albums Page</h1>

   <nav>
     <Link to="/">all</Link> {" "}
     <Link to="punk">punk</Link> {" "}
     <Link to="reggae">reggae</Link> {" "}
     <Link to="classical">classical</Link>
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
  </div>
);

const Punk = () => (
  <div>
    <h2>Punk</h2>
  </div>
);

const Reggae = () => (
  <div>
    <h2>Reggae</h2>
  </div>
);

const Classical = () => (
  <div>
    <h2>Classical</h2>
  </div>
);


export default App;
