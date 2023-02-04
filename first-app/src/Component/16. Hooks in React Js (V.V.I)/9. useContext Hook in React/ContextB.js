
import React, { useContext } from 'react';
import { FirstName, LastName } from './ContextsA';



const ContextB = () => {
  const FirstN = useContext(FirstName);
  const LastN = useContext(LastName);


  return (
    <>
      <h1>This Data is Access By Using useContext Method</h1>
      <h2> I am Frontend Developer {FirstN}  {LastN}</h2>
    </>

  )
}

export default ContextB;
