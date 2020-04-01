import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Preview from './preview/Preview'
// import './index.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


ReactDOM.render(
<Router>
    <Switch>

    <Route exact path={'/'}>
        <App />     
    </Route>

    <Route path={'/preview'}>
        <Preview/>
    </Route>
        
    </Switch>
</Router>, document.getElementById('root'));

