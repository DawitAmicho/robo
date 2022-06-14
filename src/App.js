import React from 'react';
import CardLoop from './CardLoop';
import Searchbox from './Searchbox';
import { database } from './database';


const App =()=>
{
return(
 <div className= 'tc'>
       <h1> Robo buddies</h1>
       <Searchbox/>
<CardLoop database ={database}/>   
        </div>
        )}

export default App;