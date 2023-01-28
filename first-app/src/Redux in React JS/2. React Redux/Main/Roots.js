import React from 'react'

import Styles from './Styles.css'
const Roots = () => {
  return (
    <>
      <h1>Hello</h1>

      <div className='container'>
        <h1>Incremnt/Decrement</h1>
        <h1>using React and Redux</h1>


        <div class="quantity">
          <a className="quantity__minus" title="Decrement"><span> - </span></a>
          <input name="quantity" type="text" className="quantity__input" value="0" />
          <a className="quantity__plus" title="Increment"><span>+</span></a>
        </div>
      </div>

    </>
  )
}
export default Roots;

// onClick={() => dispatch(decNumber())}
// onClick={() => dispatch(incNumber(5))}
//value={changeTheNumber} 