import React from 'react'
import './card.css';

export default function Card(props) {
    const {details} = props;
    // console.log(details);
  return (
    <div className='card'>
        <img src={details.img}/>
        <div className='description-container'>
            <p>{details.name}</p>
            <p class='irr'>{details.target_irr}% IRR</p>
        </div>
        <div className='description-container'>
            <p className='collection'>{details.collection}</p>
            <p class='coc'>{Math.floor(details.target_coc)}% CoC</p>
        </div>
        <progress id="file" value="32" max="100"> 50% </progress>
        <div className='description-container'>
            <p>32%</p>
            <p class='coc'>{details.total_invest} tokens left</p>
        </div>
    </div>
  )
}
