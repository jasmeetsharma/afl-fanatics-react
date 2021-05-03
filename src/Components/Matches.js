import axios from 'axios'
import React, { Component } from 'react'
import { TeamsContext } from '../Store'
import GamePanel from './GamePanel'

export default class Matches extends Component {
    static contextType = TeamsContext
    constructor(props) {
        super(props)

        this.state = {
            year: (new Date()).getFullYear(),
            selectYear:(new Date()).getFullYear(),
            games: [],
            filteredGames:[],
            selectRound : 1,
            selectTeam : 0,
            byRound:true,
            byClub:false
        }
    }
    componentDidMount() {
        axios.get(`https://api.squiggle.com.au/?q=games;year=${this.state.selectYear}`)
        .then(response =>{
            this.setState({
                games:response.data.games,
                filteredGames : response.data.games.filter(g => g.round == 1),
                selectRound : 1
            })
        })
    }
    handleChange = (e)=>{
        this.setState({
            selectYear : e.target.value
        })
        axios.get(`https://api.squiggle.com.au/?q=games;year=${e.target.value}`)
        .then(response =>{
            this.setState({
                games:response.data.games,
                filteredGames : response.data.games.filter(g => g.round == 1),
                selectRound : 1,
                selectTeam : 0
            })
        })
    }

    handleRoundChange = (e) => {
        this.setState({
            filteredGames : this.state.games.filter(g => g.round == e.target.value),
            selectRound : e.target.value
        })
    }
    
    handleTeamChange = (e) => {
        this.setState({
            filteredGames : this.state.games.filter(g => (g.ateamid == e.target.value || g.hteamid == e.target.value)),
            selectTeam : e.target.value
        })
    }
    toggleRounds = (e) => {
        this.setState((prevState)=>(
            {
                byClub : e.target.value === 'club' ? true : false,
                byRound : e.target.value === 'round' ? true : false
            }
        ))
    }
    
    render() {
        const {year,selectYear,games,filteredGames,selectRound,selectTeam,byRound,byClub} = this.state
        const [teams] = this.context
        let roundOptions = []
        let finalGame = (games.filter(g => g.is_grand_final == 1))
        let totalRounds = finalGame.length === 0 ? 23 : finalGame[0].round
        for (let index = 1; index <= totalRounds; index++) {
            roundOptions.push(
             <li className='col' key={index}>  
                <input id={`round-${index}`}  type='radio' name='rounds' value={index} checked={selectRound == index} onChange={this.handleRoundChange}/>
                <label htmlFor={`round-${index}`}>
                {index}</label>
            </li>
            )
        }
        let teamsRadio = teams.map((t)=>{
            return(
                <li className='col' key={t.id}>    
                    <input id={`radio-team-${t.id}`}  type='radio' name='teams' value={t.id} checked={selectTeam == t.id} onChange={this.handleTeamChange}/>
                    <label htmlFor={`radio-team-${t.id}`}>
                    <img src={`https://squiggle.com.au/${t.logo}`} alt={t.name}/>
                    </label>
                </li>
            )
        })
        return (
            <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 style={{fontSize:"64px"}}>Matches</h1>
                </div>
                <div className="btn-group mr-2 center match-filter" role="group" aria-label="filter group">
                    <button type="button" className="btn btn-secondary" value='round' onClick={this.toggleRounds}>
                    <i className="icofont-football-american"></i>
                    By Round</button>
                    <button type="button" className="btn btn-secondary" value='club' onClick={this.toggleRounds}>
                    <i className="icofont-team"></i>
                    By Club</button>
                    <div className="year-dropdown">
                        <select value={selectYear} onChange={this.handleChange}>
                            <option value={year}>AFL {year}</option>
                            <option value={year-1}>AFL {year-1}</option>
                            <option value={year-2}>AFL {year-2}</option>
                            <option value={year-3}>AFL {year-3}</option>
                            <option value={year-4}>AFL {year-4}</option>
                            <option value={year-5}>AFL {year-5}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='container'>
                
                {
                    byRound &&
                    <ul className='rounds-toolbar row'>
                        {roundOptions}
                    </ul>   
                }
                {
                    byClub &&
                    <ul className='teams-toolbar row'>
                        {teamsRadio}
                    </ul>
                }
            </div>
            {filteredGames.map(game => <GamePanel key= {game.id} game={game} hid={game.hteamid} aid={game.ateamid} ></GamePanel>)}
            </>
        )
    }
}
