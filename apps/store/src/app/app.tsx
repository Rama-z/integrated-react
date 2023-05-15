// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './page/Home';
import Products from './products/products';

export const App = (): JSX.Element => {
  return (
    <>
      <div>Hi</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
