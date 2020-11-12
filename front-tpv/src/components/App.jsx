import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';

import Error from './Error'

function App(){
    return <BrowserRouter>
        <Switch>      
               <Route  path='/' component={Error} />
        </Switch>
      
        </BrowserRouter>
}
export default App;