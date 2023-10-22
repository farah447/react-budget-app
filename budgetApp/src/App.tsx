import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Budget from './budget';

const App = () => {

  return (
    <div>
       <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Budget />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
};

export default App;

