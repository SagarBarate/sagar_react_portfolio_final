import React from 'react'

const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <div className="work__img-container">
                <img src={item.image} alt={item.title} className='work__img' />
                <div className="work__overlay">
                    <a href={item.githubLink} className="work__button work__button--github" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    {item.demoLink && (
                        <a href={item.demoLink} className="work__button work__button--demo" target="_blank" rel="noopener noreferrer">
                            <i className="bx bx-link-external"></i>
                        </a>
                    )}
                </div>
            </div>
            <div className="work__content">
                <h3 className="work__title">{item.title}</h3>
                <p className="work__description">{item.description}</p>
                <div className="work__category">{item.category}</div>
                <div className="work__technologies">
                    {item.technologies && item.technologies.map((tech, index) => (
                        <span key={index} className="work__tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkItems