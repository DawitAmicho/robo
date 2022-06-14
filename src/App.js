import React, { Component } from 'react';
import CardLoop from './CardLoop';
import Searchbox from './Searchbox';
import { database } from './database';





class App extends Component =()=>{
 constructor(){
  super()
this.state = {
 database: database,
 searching: ''
} 
  }
theSearchResult(event)=>{
 console.log(event)

}
 render () {
return(
 <div className= 'tc'>
       <h1> Robo buddies</h1>
       <Searchbox searchResult={this.theSearchChange} />
<CardLoop database ={this.state.database}/>   
        </div>
        )}
}
export default App; 
