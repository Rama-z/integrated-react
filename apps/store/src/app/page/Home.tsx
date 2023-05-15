import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (): JSX.Element => {
  return (
    <>
      <div>Welcome to Home</div>
      <Link to="/products">Here</Link>
    </>
  );
};
