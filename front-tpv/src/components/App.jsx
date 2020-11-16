import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Error from './Error';
import Login from '../pages/Login';
import NavBar from '../components/NavBar';
import Categorias from '../pages/Categorias';


function App(){
    return <BrowserRouter>
        <Switch>      
                <Route exact path='/Categorias' component={Categorias}/>
               <Route exact path='/Login' component={Login} />
               <Route exact path='/NavBar' component={NavBar}/>
               <Route path='/' component={Error} />
        </Switch>
        </BrowserRouter>
}
export default App;