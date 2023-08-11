import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './views/homepage';
import DetailsPage from './views/detailsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
