import React, { Component } from 'react'
import axios from 'axios'

export default class Standings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             standings:[]
        }
    }
    componentDidMount() {
        axios.get(`https://api.squiggle.com.au/?q=standings;${(new Date()).getFullYear()}`)
        .then(response => {
            this.setState({
                standings : response.data.standings
            })
        })
    }
    render() {
        const {standings} = this.state
        const {tPage} = this.props
        return (
            <div>
                {!tPage && <div className="hero-image">
                    <div className="hero-text">
                        <h1>Standings</h1>
                    </div>
                </div>}
                <div className="container standings">
                    <table className="standings-table table table-striped">
                        <thead className="thead-dark">
                            <tr className="standings-header">
                                <th scope="col">Rank</th>
                                <th scope="col">Team name</th>
                                <th scope="col">Points</th>
                                <th className="desktop-only" scope="col">Played</th>
                                <th scope="col">Won</th>
                                <th scope="col">Lost</th>
                                <th className="desktop-only" scope="col">Drawn</th>
                                {!tPage &&
                                     <><th className="desktop-only" scope="col">Played for</th>
                                <th className="desktop-only" scope="col">Played against</th>
                                </>}
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map(standing =>{
                               return (
                                <tr key = {standing.rank} className="standings-data">
                                    <th className="desktop-only" scope="row">{ standing.rank }</th>
                                    <td className="d-md-none d-lg-none d-xl-none">{standing.rank }</td>
                                    <td>{standing.name }</td>
                                    <td>{standing.pts }</td>
                                    <td className="desktop-only" >{standing.played }</td>
                                    <td>{standing.wins }</td>
                                    <td>{standing.losses }</td>
                                    <td className="desktop-only">{standing.draws }</td>
                                    {!tPage &&
                                     <><td className="desktop-only">{standing.for }</td>
                                    <td className="desktop-only">{standing.against }</td>
                                    </>
                                    }
                                </tr>
                                )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
