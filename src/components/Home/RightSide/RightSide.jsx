import React from 'react'
import Note from '../../Notes/Note'
import RightCarousel from './RightCarousel'

const RightSide = () => {
  return (
    <section>
      <article>
      <RightCarousel/>
    </article>
    <article>
      <Note/>
    </article>
    </section>
  )
}

export default RightSide