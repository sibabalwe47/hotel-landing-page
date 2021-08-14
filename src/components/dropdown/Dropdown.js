import react, { useState } from 'react'

const Dropdown = ({ headerTitle, data, item, setValue }) => {
    // Initial select value
    const [title, setTitle] = useState(headerTitle);
    // Initial component state
    const [toggleList, setToggleList] = useState(false);
    // Change handler method
    const onChangeHandler = (d) => {
        // Change title 
        setTitle(d);
        // Close menu by remove active class
        setToggleList(!toggleList);
        // Call function that passed data to parent
        setValue(d)
    }
    // Change state handler
    const onActiveHandler = () => {
        // Show dropdown list
        setToggleList(!toggleList)
    }
    // Close select when use clicks on window
    return (
        <div className={`dropdown-list ${toggleList ? 'active' : ''}`}>
            <div className="dropdown-list-header" onClick={() => onActiveHandler()}>
                <span>{ title }</span>
            </div>
            <ul className="dropdown-items">
                {data && data.map(d => <li key={d} onClick={() => onChangeHandler(d)} className={`${d == title ? 'selected' : ''}`}>{d} {item && item}</li>)}
            </ul>
        </div>
    )
}


export default Dropdown;