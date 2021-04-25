import React, { useContext } from 'react'
import TeamCard from './TeamCard'
import {TeamsContext} from '../Store'
import {useLocation} from 'react-router-dom'
import TeamLanding from './TeamLanding'
import { GamesContext } from '../GamesStore'


export default function Teams() {
    const [teams] = useContext(TeamsContext)
    
    let query= new URLSearchParams(useLocation().search);

    return (
        query.get('id') === null ?
        <section className="select-team container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                <h5 className="display-4">Select your Team</h5>
            </div>
            <ul className="row list-group-horizontal justify-content-center">
                { teams.map(team => <TeamCard key={team.id} team={team} />)}
            </ul>
        </section>
        :
        teams.length!=0?<TeamLanding teams={teams} tid={query.get('id')}></TeamLanding>:null
        
    )
}