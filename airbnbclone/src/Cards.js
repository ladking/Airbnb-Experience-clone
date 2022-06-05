import React from 'react'


function Cards({image, title, price, rate, location, review, spots}) {
    
  return (
    
    <div className='card'>
       { spots === 0 ? (<h5 className='sold'>SOLD OUT</h5>):'' }
        <img src={image} alt='pic' className='card-img'/>
    <div className='card-stat'>
        <img src='star.png' alt='star' />
        <span>{rate}</span>
        <span>({review}).</span>
        <span>{location}</span>
    </div>
    <p className='card--title'>{title}</p>
    <p className='card-price'><span className='bold'>From</span> {price}/person</p>
    </div>
    
  )
}

export default Cards