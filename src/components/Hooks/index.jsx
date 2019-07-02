import React, { useState } from 'react';

function Counter() {
  const [times, setTimes] = useState(0);

  return (
    <div className="Times">
      <p>Times clicked: {times}</p>
      <button
        type="button"
        onClick={() => setTimes(times + 1)}
      >Click it!
      </button>
    </div>
  );
}

export default Counter;
