import { NavLink} from 'react-router-dom'

function QuickNav() {

    return (
        <div>
            <NavLink to={`/guitars/`}>
              <button><b>Home</b>&nbsp;</button>
            </NavLink>
            <NavLink to={`/guitars/create`}>
              <button><b>Create</b>&nbsp;</button>
            </NavLink>
        </div>
    )
}

export default QuickNav