import React from 'react';
import './App.css';
import CokeContainer from './components/CokeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CokeContainer />
      </div>
    </Provider>

  );
}
export default App;