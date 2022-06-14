import React, { Component } from 'react';
import CardLoop from './CardLoop';
import Searchbox from './Searchbox';
import { database } from './database';





class App extends Component {
 constructor(){
  super()
this.state = {
 database: database,
 searching: ''
} 
  }


inSearch=(event)=>{
    this.setState({searching: event.target.value})
    
    

}
 render () {
    const dataFiltro = this.state.database.filter(database=>{
        return( database.name.toLowerCase().includes(this.state.searching.toLowerCase())

            )
    })
return(
 <div className= 'tc'>
       <h1> Robo buddies</h1> 
       <Searchbox searchResult={this.inSearch} />
<CardLoop database ={dataFiltro}/>   
        </div>
        )}
}
export default App; 
