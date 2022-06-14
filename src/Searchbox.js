import  React from 'react';

const Searchbox=({searching, 
	searchResult})=>{
	return (

<div className='pa3' >
<input
className='pa2 mw5 bg-light-blue' 
 type='search' 

   placeholder= ' search here' 
   onChange ={ searchResult }
    />
		
</div>)}
export default Searchbox;