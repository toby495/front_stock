import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Error from './Error';
import Login from '../pages/Login'


function App(){
    return <BrowserRouter>
        <Switch>      
               <Route exact path='/Login' component={Login} />
               <Route path='/' component={Error} />
        </Switch>
      
        </BrowserRouter>
}
export default App;