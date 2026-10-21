import React from 'react'


function Card(props) {
  return (
    <div className="w-full border-2 border-pink-500 bg-black p-5 text-center shadow-lg shadow-purple-900">

      <img
        src={props.image}
        alt={props.title}
        className="w-28 h-28 object-cover mx-auto mb-5"
      />

      <h3 className="text-purple-400 text-lg font-bold mb-3">
        {props.title}
      </h3>

      <p className="text-purple-300 text-sm mb-5">
        {props.description}
      </p>

      

    </div>
  )
}

export default Card
