import React from 'react'

const School = ({school}) => {
  return (
    <div>
        <div className="image">
            <img src={`src/assets/images-${school.id}`} alt='img' />
        </div>
        <div className="school">
            <h1>{school.name}</h1>
            <p className="desc">{school.desc} </p>
        </div>
    </div>
  )
}

export default School