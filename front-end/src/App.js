import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import AuthenticationContext from './contexts/AuthenticationContext';
import './App.css';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';
import AlbumInfo from './components/AlbumInfo';
import Register from './components/Register';
import ReviewAlbum from './components/ReviewAlbum';
import Login from './components/Login';

export default function App() {
  let [isAuthenticated, setAuth] = useState(false);

  function authenticate() {
    setAuth(true);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <AuthenticationContext.Provider value={isAuthenticated}>
          <Navigation/>

          <Route exact={true} path='/' component={FrontPage}/>

          <Route path='/details/:id' component={AlbumInfo}/>

          <Route path='/review/:id' component={ReviewAlbum}/>

          <Route path='/register' render={() => <Register authenticate={authenticate}/>}/>
          <Route path='/login' render={() => <Login authenticate={authenticate}/>}/>
        </AuthenticationContext.Provider>
     </div>
    </BrowserRouter>
  );
}
