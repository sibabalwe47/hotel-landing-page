import react from 'react'


const Overlay = ({ children, position }) => {
    console.log(children)
    return (
        <div className={`overlay ${position && position}`}>
            { children }
        </div>
    )
}


export default Overlay;