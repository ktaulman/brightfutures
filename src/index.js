import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Preview from './preview/Preview'
// import './index.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

//Contentful CMS 
const contentful=require('contentful')
const content= contentful.createClient({
    space:process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken:process.env.REACT_APP_CONTENTFUL_PREVIEW_API_KEY,
    host:'preview.contentful.com'
})
// //load font from Contentful
// content.getEntry('3M7edk6wN4UrT9q8Ok93CA')
// .then(res=>{
//     const {font}=res.fields;
//     console.log(font)
//     console.log(document.querySelector('#root'))
//     document.querySelector('#root').style.fontFamily=font;
    
// }).catch(err=>console.err(err))

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

