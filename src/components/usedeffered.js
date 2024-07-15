import React, { useState, useEffect } from 'react';

const useDeferredTask = (delayMs) => {
  const [taskComplete, setTaskComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTaskComplete(true);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delayMs]);

  return taskComplete;
};

function DeferredTaskComponent() {
  const delayMs = 5000; 
  const taskComplete = useDeferredTask(delayMs);

  return (
    <div>
      <h2>Deferred Task Example</h2>
      {taskComplete ? (
        <p>Task completed after {delayMs} milliseconds!</p>
      ) : (
        <p>Waiting for task to complete...</p>
      )}
    </div>
  );
}

export default DeferredTaskComponent;
