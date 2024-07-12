import React, { useContext, useState } from 'react';
const MyContext = React.createContext();

function Contexts() {
  const [value, setValue] = useState('Hello, World!');

  return (
    
    <MyContext.Provider value={value}>
      <ChildComponent />
      <button onClick={() => setValue('Hello, React!')}>Change to React</button>
      <button onClick={()=> setValue('Hello there!')}>Change to there</button>
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
}

export default Contexts;