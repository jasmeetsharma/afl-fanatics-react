import React from 'react'
import Homepage from './Homepage'
import Teams from './Teams'
import { Route } from 'react-router-dom'
import Store from '../Store'
import Standings from './Standings'
import Matches from './Matches'

function MainContainer() {
    return (
        <div className='main_container container'>
            <Store>
                <Route exact path="/" component={Homepage} />
                <Route path="/teams" component={Teams} />
                <Route path="/standings" component={Standings} />
                <Route path="/matches" component={Matches} />
            </Store>
        </div>
    )
}

export default MainContainer
