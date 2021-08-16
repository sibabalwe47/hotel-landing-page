import react from 'react';
import Testimonial from './testimonial/testimonial';

const Testimonials =  () => {
    const data = [1,2];
    return (
        <div className="row">
            {data && data.map(d => <Testimonial />)}
        </div>
    )
}

export default Testimonials;