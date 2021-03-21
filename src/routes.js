import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Landing from './components/Landing'

export default (
    <Switch>
        <Route exact path ='/' component={Auth}/>
        <Route exact path ='/home' component={Landing}/>
    </Switch>
)