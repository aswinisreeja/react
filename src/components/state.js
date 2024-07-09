import React, { useState } from 'react';

const Button =()=> {

  const [On, setOn] = useState(false);
  
  const toggle = () => {
    setOn(!On); 
  };

  return (
    <div>
      <button onClick={toggle}>
        {On ? 'Turn Off' : 'Turn On'}
      </button>
      <p>{On ? 'The button is OFF' : 'The button is ON'}</p>
    </div>
  );
}

export default Button;
