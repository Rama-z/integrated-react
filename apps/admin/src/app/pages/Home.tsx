import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>Welcome to Home</div>
      <Link to="/product">Here</Link>
    </>
  );
}
