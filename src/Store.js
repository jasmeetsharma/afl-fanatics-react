import React , {useState,useEffect} from 'react'
import axios from 'axios'

const TeamsContext = React.createContext({
    teams : [],
    setTeams : () => {}
})
export default function Store({children}) {
    const [teams, setTeams] = useState(TeamsContext)
    useEffect(() => {
        let mounted = true
        axios.get('https://api.squiggle.com.au/?q=teams')
        .then(response =>{
            setTeams(response.data.teams)
        })
        return () => mounted = false;
    }, []);
    return (
        <TeamsContext.Provider value={[teams, setTeams]}>
            {children}
        </TeamsContext.Provider>
    )
}
export {TeamsContext}
