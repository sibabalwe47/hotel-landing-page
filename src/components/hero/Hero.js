import react, { Fragment } from 'react'
import Overlay from '../overlay/Overlay';
import SearchRooms from '../forms/rooms/SearchRooms';

const HeroContent = (heroTitle, title) => (
    <Fragment>
        <div className="hero-content">
            <h1>{heroTitle && heroTitle}</h1>
            <p>{title && title}</p>
            
        </div>
        <SearchRooms />
    </Fragment>
);

const Hero = ({ heroTitle, title }) => {
    return (
        <header className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Overlay children={HeroContent(heroTitle, title)} position="center" />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Hero;