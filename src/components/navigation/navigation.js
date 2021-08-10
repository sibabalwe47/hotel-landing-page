import react from 'react'
import Button from '../button/button'

const Navigation = () => {
    const navigateToReservations = () => console.log('clicked....')
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a className="navbar-brand">Logo</a>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><a className="nav-link active" href="#">Home</a></li>
                            <li><a className="nav-link" href="#">Rooms</a></li>
                            <li><a className="nav-link" href="#">Facilities</a></li>
                            <li><a className="nav-link" href="#">Contact Us</a></li>
                            <li className="button-wrapper">
                                <Button title="Reservations" action={navigateToReservations} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;