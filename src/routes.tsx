import { Switch, Route, Router } from 'react-router-dom'
import React  from "react"

import HomeScreen from 'pages/Home'
import { createBrowserHistory } from 'history'

const history =  createBrowserHistory({
  /* pass a configuration object here if needed */
})


const Routes = ({}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>      
    )
}


export default Routes