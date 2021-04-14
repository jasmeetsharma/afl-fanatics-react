import React, { useContext } from 'react'
import TeamCard from './TeamCard'
import {TeamsContext} from '../Store'

// import React, { Component } from 'react'

// export default class Teams extends Component {
//     //static contextType = TeamsContext
//     render() {
//        // const [teams] = this.context
//         return (
//             <TeamsContext.Consumer>
//                 {({teams,setTeams}) => (
//                     <section className="select-team container">
//                     <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
//                         <h5 className="display-4">Select your Team</h5>
//                     </div>
//                     <ul className="row list-group-horizontal justify-content-center">
//                         {teams.map(team => <TeamCard key={team.id} team={team} />)}
//                     </ul>
//                     </section>
//                 )}
//             </TeamsContext.Consumer>
//         )
//     }
// }


export default function Teams() {
    const [teams] = useContext(TeamsContext)


    // useEffect(() => {
    //     let mounted = false
    //     axios.get('https://api.squiggle.com.au/?q=teams')
    //     .then(response => response.data.teams)
    //     .then(setTeams)
    //     .finally(()=>  mounted = false)
    // }, [axios,setTeams]);
    return (
        <section className="select-team container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                <h5 className="display-4">Select your Team</h5>
            </div>
            <ul className="row list-group-horizontal justify-content-center">
                {teams._currentValue2 === undefined ? teams.map(team => <TeamCard key={team.id} team={team} />): null}
            </ul>
        </section>
    )
}