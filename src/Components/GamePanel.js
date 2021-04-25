import React, { Component } from 'react'
import { TeamsContext } from '../Store'

export default class GamePanel extends Component {
    static contextType = TeamsContext
    constructor(props) {
        super(props)
        this.state = {
            // hteam:this.context.teams.find((team)=> team.id === this.props.hid),
            // ateam:this.context.teams.find((team)=> team.id === this.props.aid)
        }
    }

    render() {
        const { game} = this.props
        const [teams] = this.context
        // const { hteam,ateam } = this.state
        let hteam = teams.find((team)=> team.id === this.props.hid)
        let ateam = teams.find((team)=> team.id === this.props.aid)
        let timeOptions = {
            hour: 'numeric', minute: 'numeric',
            timeZone: 'Australia/Sydney',
            timeZoneName: 'short'
        }
        let dateOptions = {
            weekday: 'long', month: 'long',
            day: 'numeric',
        }
        return (
            <div className="panel panel-default">
                <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none text-center mb-2"><b>{game.hteam.name}</b> v <b>{game.ateam.name}</b></div>
                <div className="panel-body row justify-content-center align-items-center">
                    <img src={`https://squiggle.com.au/${hteam.logo}`} className="img-rounded team-logo" alt={hteam.name} />
                    <div>
                        <h4 className="display-4 d-none d-md-block d-lg-block d-xl-block" >{hteam.name}</h4>
                    </div>
                    <div className="match-details">
                        {game.complete != 100 &&
                            <p className="match-time">
                                {new Intl.DateTimeFormat('en-AU',timeOptions).format((new Date(game.date+' '+game.tz)))}      
                            </p>
                        }
                        <p className="match-date">
                            {new Intl.DateTimeFormat('en-AU',dateOptions).format((new Date(game.date+' '+game.tz)))}
                        </p>
                        {game.complete != 100 && <p className="match-venue">{game.venue}</p>}
                        {/* <p className="match-venue">{game.roundname}</p> */}
                        {game.complete == 100 && <p className="match-winner" > <span>{game.winner}</span> won</p> }
                    </div>
                    <div>
                        <h4 className="display-4 d-none d-md-block d-lg-block d-xl-block" >{ateam.name}</h4>
                    </div>
                    <img src={`https://squiggle.com.au/${ateam.logo}`} className="img-rounded team-logo" alt={ateam.name}/>
                </div>
            </div>
        )
    }
}
