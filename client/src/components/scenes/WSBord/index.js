import React, { useRef, useState, useEffect } from 'react';

export default () => {
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('wss://ws.kraken.com/');
    ws.current.onopen = () => console.log('ws opened');
    ws.current.onclose = () => console.log('ws closed');

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      console.log('e', message);
    };
  }, [isPaused]);

  return (
    <div>
      <button onClick={() => setPause(!isPaused)}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};
