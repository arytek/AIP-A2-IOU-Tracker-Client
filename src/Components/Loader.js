import React from 'react';

/**
 * Component for showing a loading animation to the user when a task is loading.
 */
function Loader() {
  return (
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
  );
}
export default Loader;
