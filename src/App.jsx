import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route } from "react-router-dom";
import Home from './component/Home'; 
import Post from './component/Post'
import Attribute from './component/Redux/Attribute'


class App extends React.Component{
  
    render(){
  
        return(
            
          <div>
           
       
          <Router  >
         
         
                
                 
                 <Route exact path="/" component={Home} />
                 
                 <Route exact path="/attribute" component={Attribute} />
                 <Route exact path="/:post" component={Post} />
            </Router>
       
        

            
           </div>
        )
    }
} 






export default App;

