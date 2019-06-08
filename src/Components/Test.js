import React, { useState, useEffect } from 'react';

export default function Test() {
  const [timer, setTimer] = useState('waiting');

  useEffect(() => {
    const t = setTimeout(() => {
      setTimer('finished');
    }, 2000);
    return () => clearTimeout(t);
  });

  return <div>{timer}</div>;
}
