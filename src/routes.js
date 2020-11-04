import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Project from './pages/Project/Project';
import CreateProject from './pages/CreateProject/CreateProject';


export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/projects' component={Project}></Route>
            <Route path='/dashboard/create-project' component={CreateProject}></Route>
        </Switch>
    );
}