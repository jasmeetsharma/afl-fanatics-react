import React, { Component } from 'react'
import axios from 'axios'
import GamePanel from './GamePanel'
import {Link} from 'react-router-dom'
import {TeamsContext} from '../Store'


export default class Homepage extends Component {
    static contextType = TeamsContext
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            teams: []
        }
    }

    componentDidMount() {
        const year = (new Date()).getFullYear()
        axios.get(`https://api.squiggle.com.au/?q=games;year=${year};complete=!100`)
            .then(response => {
                //axios.get(`https://api.squiggle.com.au/?q=teams`)
                //.then(res =>{
                    this.setState({
                        games: response.data.games
                  //      teams: res.data.teams
                    })
                //})

            })
    }


    render() {
        const { games } = this.state
        const [teams] = this.context
        let sortedGames
        sortedGames = games.length!==0 ? games.sort((a,b) => new Date(a.date)  - new Date(b.date)) : null
        return (
            
            <section className='homepage'>
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Select Your Favourite Team</h1>
                        <p>Get the tips, fixtures tailored for your <Link to='/teams' title="Select team page">favourite team</Link></p>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '50px' }}>
                    <div className="page-content">
                        <h2 className="display-3">Latest Results</h2>
                        {games.length !==0? <GamePanel game={sortedGames[0]} hid={sortedGames[0].hteamid} aid={sortedGames[0].ateamid} teams={teams}/> : <div className="panel panel-default"></div>}
                        <h2 className="display-3">Next Match</h2>
                        {games.length !==0? <GamePanel game={sortedGames[1]} hid={sortedGames[1].hteamid} aid={sortedGames[1].ateamid} teams={teams}/> : <div className="panel panel-default"></div>}
                    </div >
                </div >
            </section>
        )
    }
}
