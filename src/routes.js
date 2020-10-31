import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Project from './pages/Project/Project';


export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/projects' exact component={Project}></Route>
            <Route path='/dashboard/maker'></Route>
        </Switch>
    );
}