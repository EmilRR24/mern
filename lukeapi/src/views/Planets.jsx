import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router'

const Planet = () => {
    const {index} = useParams()
    const [apiState, setApiState] = useState()
    const [errMsg, setErrMsg] = useState()
    const [errImg, setErrImg] = useState()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${index}`)
        .then(response => {
            console.log("SUCCESS", response.data)
            setApiState(response.data)
        })
            .catch(err => {console.log("ERROR", err)
            setApiState("")
            setErrMsg("These are not the droids you're looking for...")
            setErrImg(`https://i.redd.it/6o6blcul5n841.jpg`)
        })
        }, [index])

    return (
        <div style={{textAlign: 'center'}}>
            {
            (apiState) ? 
            <div>
                <h1>{apiState.name}</h1>
                <p>Climate: {apiState.climate}</p>
                <p>Terrain: {apiState.terrain}</p>
                <p>Surface Water: {apiState.surface_water}</p>
                <p>Population: {apiState.population}</p>
            </div>
            : <p>
            <h1>{errMsg}</h1>
            <img src={errImg} alt="Obi-Wan" />
            </p>
            }
        </div>
    )
}
export default Planet