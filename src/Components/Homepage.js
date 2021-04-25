import React, { useContext } from 'react'
import GamePanel from './GamePanel'
import { Link } from 'react-router-dom'
import { TeamsContext } from '../Store'
import { GamesContext } from '../GamesStore'


export default function Homepage() {
    const [teams] = useContext(TeamsContext)
    const [games, setGames] = useContext(GamesContext)
    let upcomingGames,latestResults
    upcomingGames = games.filter(g=>g.complete != '100').sort((a,b)=>(new Date(a.date))-(new Date(b.date)));
    latestResults = games.filter(g=>g.complete == '100').sort((a,b)=>(new Date(b.date))-(new Date(a.date)));
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
                    {games.length !== 0 ? <GamePanel game={latestResults[0]} hid={latestResults[0].hteamid} aid={latestResults[0].ateamid} teams={teams} /> : <div className="panel panel-default"></div>}
                    <h2 className="display-3">Next Match</h2>
                    {games.length !== 0 ? <GamePanel game={upcomingGames[0]} hid={upcomingGames[0].hteamid} aid={upcomingGames[0].ateamid} teams={teams} /> : <div className="panel panel-default"></div>}
                </div >
            </div >
        </section>
    )
}

