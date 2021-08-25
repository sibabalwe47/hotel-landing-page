import react from 'react'

const Test = () => {

    const onClickHandler = () => console.log('Clicked...')


    return (
        <div className="wrapper">
            <button onClick={() => onClickHandler()}>Click</button>
        </div>
    )
}


export default Test;