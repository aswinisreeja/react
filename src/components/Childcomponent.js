import React from 'react';

const Child = ({ sendMessageToParent }) => {
  const handleClick = () => {
    const message = 'Hello from Child!';
    sendMessageToParent(message);
  };

  return (
    <div>
      <button onClick={handleClick}>This is my</button>
    </div>
  );
};

export default Child;
