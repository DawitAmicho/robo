import  React from 'react';
import { FcSearch } from "react-icons/fc";
const Searchbox=({searching, 
	searchResult})=>{
	return (

<div  className='pa3'>

<FcSearch/>
<input id="box" 

className='pa2 mw5 bg-light-blue' 
 type='search' 
 placeholder= 'search here' 
 onChange ={ searchResult }

    />
    
    <input  id="icon" 
    className='pa2 mw4'
     type="submit"
      value="search"
       name="search"
      
       />



		
</div>)}
export default Searchbox;