import React from 'react'
import './Reservations.css'
import ResCard from '../ResCard/ResCard'

const Reservations = ({ resData, cancelResy }) => {
  const cards = resData.map(resy => {
    return (
      <ResCard
        id={resy.id}
        key={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
        cancelResy={cancelResy}
      />
    )
  })

  return (
    <section className="res-wrapper">
      {cards}
    </section>
  )
}

export default Reservations
