import React from 'react'
import Homepage from './Homepage'
import Teams from './Teams'
import { Route } from 'react-router-dom'
import Store from '../Store'
import Standings from './Standings'
import Matches from './Matches'
import TeamLanding from './TeamLanding'
import { GamesProvider } from '../GamesStore'

function MainContainer() {
    return (
        <div className='main_container container'>
            <Store>
            <GamesProvider>
                <Route exact path="/" component={Homepage} />
                <Route path="/teams" component={Teams} />
                <Route path="/standings" component={Standings} />
                <Route path="/matches" component={Matches} />
            </GamesProvider>
            </Store>
        </div>
    )
}

export default MainContainer
