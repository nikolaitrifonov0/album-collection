import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';
import AlbumInfo from './components/AlbumInfo';
import Register from './components/Register';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Route exact={true} path='/' component={FrontPage}/>

        <Route path='/details/:id' component={AlbumInfo}/>

        <Route path='/register' component={Register}/>
     </div>
    </BrowserRouter>
  );
}
