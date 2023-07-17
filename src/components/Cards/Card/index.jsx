import React from 'react'
import { ReactComponent as HeartSvg } from '../../../assets/heart.svg';
import './style.scss'

export default function Card({data}) {
  return (
    <div className='card'>
      <div className="card__image">
        <img src={data.avatar} alt="Фото" />
      </div>
      <p className="card__name">{`${data.first_name} ${data.last_name}`}</p>
      <div className='card__heart'><HeartSvg /></div>
    </div>
  )
}