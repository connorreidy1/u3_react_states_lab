import { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import pizza from '../pizza'


const StateDetails = (props) => {

    const [state, setState] = useState('')

    let {name} = useParams()

    useEffect(() => {
        let selectedState = props.states.states.find((state) => state.name === name)
        setState(selectedState)
    }, [props.states, name])

    return state ? (
        <div className="detail">
            <div className="detail-header">
                <h1>{state.name}</h1>
            </div>
            <div className="info-wrapper">
                <h3>Capital: {state.capital}, {state.abbreviation}</h3>
                <h3>Incorporation Date: {new Date(state.incorporation_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                <h3>Timezone: {state.timezone}</h3>
                <h3>Bordering States:</h3>
                <ul>
                    {state.borders.map((border) => (
                        <li key={border}>{border}</li>
                    ))} 
                </ul>
                <div className="pizza-section">
                    <h4>Quality of Pizza: {state.quality_of_pizza}</h4>
                    <img className="pizza-pic" src={pizza[state.quality_of_pizza].img}/>
                </div>
                <div className="flag-div">
                    <img className="flag" src={`https://www.states101.com/img/flags/svg/${state.name.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={`${state.name} Flag`} />
                </div>
            </div>
            <Link to="/list">Go Back</Link>
        </div>
        
    ) : null 
}
 export default StateDetails