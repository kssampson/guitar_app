import { NavLink} from 'react-router-dom'
import {useState} from 'react'

function QuickNav() {

  const [showGuitarNav, setShowGuitarNav] = useState(false)
  const [showAccountNav, setShowAccountNav] = useState(false)
  const handleShowGuitarNav = (event) => {
    setShowGuitarNav(!showGuitarNav)
  }
  const handleShowAccountNav = (event) => {
    setShowAccountNav(!showAccountNav)
  }



    return (
        <div className="navBar">
          <div className="navList"
            onClick={handleShowGuitarNav}>
            <h1 className="navBarLink"
              ><b>Guitars</b>&nbsp;</h1>
          <div className={showGuitarNav ? "showGuitarNav" : "hide"}>
            <div>
              <NavLink to={`/guitars/`}>
                <h1 className="navBarLink2"
                ><b>List</b>&nbsp;</h1>
              </NavLink>
              <NavLink to={`/guitars/create`}>
                <h1 className="navBarLink2"
                ><b>Create</b>&nbsp;</h1>
              </NavLink>
            </div>
          </div>
                </div>
          <div className="navBrand">
            <NavLink to={`/`}>
              <h1 className="navBarBrandLink"><b>Fret Fury</b>&nbsp;</h1>
            </NavLink>
          </div>
          <div className="navList">
            <h1 className="navBarLink"><b>Account</b>&nbsp;</h1>
          </div>
        </div>
    )
}

export default QuickNav