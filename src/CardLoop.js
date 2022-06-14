import React from 'react';
import Cards from './Cards';


const CardLoop= ({database})=>{

return(
	<div>{
		database.map((user,i)=>
		{
	return(
		
			<Cards key={i} 
			id={database[i].id} 
			name={database[i].name}
		    email={database[i].email}/>	
		);
})}
		</div>
)}
export default CardLoop;