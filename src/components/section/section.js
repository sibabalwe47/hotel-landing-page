import react from 'react'

const Section = ({ children, classes, title }) => {
    return (
        <section className={`${classes}`}>
            <div className="container">
                {title && (<div className="section-title">{title}</div>)}
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section; 