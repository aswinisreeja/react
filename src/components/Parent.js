import React from 'react';
import Child from './Child';

const Parent = () => {
  const message = 'Hello its me';

  return (
    <div>
      <Child message={message} />
    </div>
  );
};

export default Parent;
