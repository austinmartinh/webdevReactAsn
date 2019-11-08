import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from './components/Firebase';

//Firebase is instantiated once and REeact injects it using context 
//provider/consumer relationship where necessary to components
ReactDOM.render(<FirebaseContext.Provider value={new Firebase()}>
    <App />
    </FirebaseContext.Provider>
    ,document.getElementById('root'));


serviceWorker.unregister();
