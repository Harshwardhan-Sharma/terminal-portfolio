import React from 'react'

const Card = (props: any) => {
  return (
    <>
    <div className="card" style={{width: '10rem', backgroundColor: 'black' }}>
    {props.Icon && <props.Icon size={24} className="card-img-top mt-2 text-gray-300" />}
  <div className="card-body">
    <p className="card-text text-center text-gray-300">  {props.text}</p>
  </div>
</div>
    

    </>
  )
}

export default Card
