import react, { useState, Fragment } from 'react'
import Dropdown from '../../../dropdown/Dropdown';


const Locations = () => {
    // Title
    const title = "City"
    // Component data
    const data = ['Johannesburg', 'Cape Town', 'Durban', 'Mombasa', 'Nairobi'];
    // Pass data from child component to store
    const setValue = (value) => {
        console.log(value)
    }
    return (
        <Dropdown headerTitle={title} data={data} setValue={setValue}  />
    )
}

export default Locations;