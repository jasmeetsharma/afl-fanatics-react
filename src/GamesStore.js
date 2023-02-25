import axios from 'axios';
import {useState,createContext,useEffect} from 'react'

export const GamesContext = createContext()

export const GamesProvider = props => {
    const [games,setGames] = useState([])
    useEffect(() => {
        const year = (new Date()).getFullYear()
        axios.get(`https://api.squiggle.com.au/?q=games;year=${year}`)
        .then(response =>{
            setGames(response.data.games.sort((a, b) => new Date(a.date) - new Date(b.date)))
        })
    }, []);
    
    return(
        <GamesContext.Provider value={[games,setGames]}>
            {props.children}
        </GamesContext.Provider>
    )
}