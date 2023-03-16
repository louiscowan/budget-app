import { Route, Routes } from 'react-router-dom';
import AddEventPage from './AddEventPage';
import Home from './Home';

// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducers from '../reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


function App() {

  return (
    <main>      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addEventPage/:date" element={<AddEventPage />} />
      </Routes>
      </main>
  );
}

export default App;

