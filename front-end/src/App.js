import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <FrontPage/>
      </BrowserRouter>
    </div>
  );
}
