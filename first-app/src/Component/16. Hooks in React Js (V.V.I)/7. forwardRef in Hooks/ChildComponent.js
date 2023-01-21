
import React, { forwardRef } from 'react';


function ChildComponent(Props , imtiyaz) { // ye scornd parameter leta hai kuchh name de saktey ho
  return (
    <div>
      <input type="text"  ref={imtiyaz}/>
    </div>
  )
}

export default forwardRef(ChildComponent); // forwardRef ek wrapper hota hai so use huwa hai export 

