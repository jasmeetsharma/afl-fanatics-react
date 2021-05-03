import React, { Component, useContext } from 'react'
import { GamesContext } from '../GamesStore'
import GamePanel from './GamePanel'
import Matches from './Matches'
import Standings from './Standings'

export default function TeamLanding(props) {
    const { teams, tid } = props
    let team = teams.filter((tt) => tt.id == tid)
    const [games, setGames] = useContext(GamesContext)
    let nextGame, lastGame
    nextGame = games.filter((g) => {
        return ((g.hteamid == team[0].id || g.ateamid == team[0].id) && (g.complete != 100))
    })[0]
    lastGame = games.filter((g) => {
        return ((g.hteamid == team[0].id || g.ateamid == team[0].id) && (g.complete == 100))
    })
    lastGame = lastGame[lastGame.length - 1]
    return (
        <div>
            <section className='team-landing'>
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>{team[0].name}</h1>
                        <div className="team-logo-banner">
                            <img src={`https://squiggle.com.au/${team[0].logo}`} className="banner-logo" title="team logo" />
                        </div>
                    </div>
                </div>
            </section>
            <div className='container' style={{ marginTop: '50px' }}>
                <section className='team-games-section'>
                    <h2 className="display-3">Next Match</h2>
                    {games.length != 0 && <GamePanel game={nextGame} hid={nextGame.hteamid} aid={nextGame.ateamid} teams={teams} />}
                    <h2 className="display-3">Last Match</h2>
                    {games.length != 0 && <GamePanel game={lastGame} hid={lastGame.hteamid} aid={lastGame.ateamid} teams={teams} />}
                </section>
                {/* <aside>
                    <Standings tPage='true'></Standings>
                </aside> */}
            </div>
        </div>
    )
}
