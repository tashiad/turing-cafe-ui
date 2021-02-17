import React from 'react'
import './ResCard.css'

const ResCard = ({ id, name, date, time, number }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </article>
  )
}

export default ResCard
