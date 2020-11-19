import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Error from './Error';
import Login from '../pages/Login';
import Categorias from '../pages/Categorias';
import Table from '../components/Table'


function App(){
    return <BrowserRouter>
        <Switch>      
               <Route exact path='/Categorias' component={Categorias}/>
               <Route exact path='Table' component={Table}/>
               <Route exact path='/Login' component={Login} />
               <Route exact path='/' component={Error} />
        </Switch>
        </BrowserRouter>
}
export default App;