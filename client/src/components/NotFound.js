// NotFound.js
import React from 'react';
// import './NotFound.css'; // Import your CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="/404-image.png" alt="404 Error" className="not-found-image" />
    </div>
  );
};

export default NotFound;
