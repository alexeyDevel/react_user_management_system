import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './style.scss'


export default function Cards({cards}) {

  return (
    <div className='cards'>
      {cards?.map(item => <Link key={`card__${item.id}`} to={`${item.id}`}>
          <Card  data={item}/>
        </Link>)}
      
    </div>
  )
}