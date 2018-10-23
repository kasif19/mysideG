import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./page/Post";
import './App.css';




const App = () => (
 <Router>
   <div>
     <React.Fragment>


   <Route exact path="/" component={Post} />
    <Route exact path="/post" component={Post} />
       
    






     </React.Fragment>
     
   </div>
 </Router>
);


export default App;