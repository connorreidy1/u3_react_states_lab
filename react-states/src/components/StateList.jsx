import { useNavigate } from "react-router-dom"

const StateList = (props) => {
    let navigate=useNavigate()

    const showState = (state) => {
        console.log(state)
        navigate(`${state.name}`)
    }
    return (
        <div>
            <h1>List of States</h1>
        <div className="state-grid">
            {
            props.states.states.map((state) => (
            <div className="state-card" onClick={() => showState(state)} key={state.name}>
                <h2>{state.name}</h2>
            </div>
            ))}
        </div>
        </div>
    )
}

export default StateList