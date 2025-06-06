import React from 'react'

const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.githubLink} className="work__button" target="_blank" rel="noopener noreferrer">
                GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorkItems