import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { auth } from '../firebase';
import Home from './Home';
import Login from './Login';

// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducers from '../reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


function App() {

  const [ user, setUser] = useState()

  const theUser = auth.currentUser

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <main>      
       {user
       ?  <Home />
       :  <Login />
      }
      </main>
  );
}

export default App;

