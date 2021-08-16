import react from 'react'
import Room from './room/room'

const Rooms = () => {

    const data = [1,2,3,4,5,6]

    return (
        <div className="row">
            {data && data.map(r => <Room />)}
        </div>
    )
}


export default Rooms;