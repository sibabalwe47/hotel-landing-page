import react from 'react'

const Button = ({ title, action }) => {
    return (
        <button className="btn" onClick={() => action() }>
           {title && title}
        </button>
    )
}


export default Button;