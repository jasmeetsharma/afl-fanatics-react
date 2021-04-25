import React , {useState,useEffect} from 'react'
import axios from 'axios'

const TeamsContext = React.createContext()
export default function Store({children}) {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios.get('https://api.squiggle.com.au/?q=teams')
        .then(response =>{
            setTeams(response.data.teams)
        })
        
    }, []);
    return (
        <TeamsContext.Provider value={[teams, setTeams]}>
            {children}
        </TeamsContext.Provider>
    )
}
export {TeamsContext}
