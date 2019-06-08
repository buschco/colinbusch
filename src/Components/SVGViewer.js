import React, { useState } from 'react';

import Gallery from './Gallery';

export default function SVGViewer() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() =>
          setActive(active === 0 ? Gallery.length - 1 : active - 1)
        }
      >
        {'<'}
      </button>
      <button
        type="button"
        className="btn"
        onClick={() =>
          setActive(active === Gallery.length - 1 ? 0 : active + 1)
        }
      >
        {'>'}
      </button>
      <div className="svg-viewer">{Gallery[active]()}</div>
    </div>
  );
}
