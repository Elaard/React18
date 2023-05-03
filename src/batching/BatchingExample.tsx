import React, { useState } from 'react';

export default function BatchingExample() {
  const [_count, setCount] = useState(0);
  const [_flag, setFlag] = useState(false);

  // Before: only React events were batched.
  const oldBatching = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React will render twice, once for each state update (no batching)
    }, 1000);
  };

  // After: updates inside of timeouts, promises,
  // native event handlers or any other event are batched.
  const newBatching = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React will only re-render once at the end (that's batching!)
    }, 1000);
  };

  return (
    <>
      <button onClick={oldBatching}>old batching example</button>
      <button onClick={newBatching}>new batching example</button>;
    </>
  );
}
