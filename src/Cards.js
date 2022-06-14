import React from 'react';

const Cards = ({id, name, email}) =>
{
  return (
<div className=' bg-light-purple dib br2 pa2 ma2 grow mw5 shadow-5 '  >
<img alt='me' src = {`https://robohash.org/${id}?150*150`} />
<div>
<h2>{ name } </h2>
<p>{ email }</p>
</div>
</div>
  	)

} 
export default Cards
 