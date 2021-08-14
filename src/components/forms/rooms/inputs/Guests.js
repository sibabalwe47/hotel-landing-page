import react, { useState } from 'react'
import Dropdown from '../../../dropdown/Dropdown';

const Guests = () => {
    // Title
    const title = "Number of Guests"
    // Component data
    const data = [2,4,6,8,10];
    // Pass data from child component to store
    const setValue = (value) => {
        console.log(value)
    }
    
    return (
        <Dropdown headerTitle={title} data={data} setValue={setValue}  />
    )
}

export default Guests;