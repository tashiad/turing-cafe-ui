import React from 'react'
import './ResCard.css'

const ResCard = ({ id, name, date, time, number, cancelResy }) => {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => cancelResy(id)}>Cancel</button>
    </article>
  )
}

export default ResCard
