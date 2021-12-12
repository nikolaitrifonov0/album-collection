import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import AuthenticationContext from './contexts/AuthenticationContext';
import './App.css';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';
import AlbumInfo from './components/AlbumInfo';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './Logout';
import ReviewAlbum from './components/ReviewAlbum';
import Collection from './components/Collection';
import EditReview from './components/EditReview';
import DeleteReview from './components/DeleteReview';

export default function App() {
  let [userId, setUserId] = useState(null);

  function authenticate(id) {
    setUserId(id);
  }

  function logout() {
    setUserId(null);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <AuthenticationContext.Provider value={userId}>
          <Navigation/>

          {
            userId
            ? <Route exact={true} path='/' component={Collection}/>
            : <Route exact={true} path='/' component={FrontPage}/>
          }

          <Route path='/details/:id' component={AlbumInfo}/>
          <Route path='/review/:id' component={ReviewAlbum}/>
          <Route path='/edit/:id' component={EditReview}/>
          <Route path='/delete/:id' component={DeleteReview}/>

          <Route path='/register' render={() => <Register authenticate={authenticate}/>}/>
          <Route path='/login' render={() => <Login authenticate={authenticate}/>}/>
          <Route path='/logout' render={() => <Logout logout={logout}/>}/>
        </AuthenticationContext.Provider>
     </div>
    </BrowserRouter>
  );
}
