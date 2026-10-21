
function Card(props) {
  return (
    <div className="p-[2px] bg-gradient-to-br from-red-500 via-pink-500 to-blue-600 shadow-lg shadow-purple-900">
      <div className="w-full h-full bg-black p-5 text-center">
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
    </div>
  )
}

export default Card
