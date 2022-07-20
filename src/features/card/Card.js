import React from 'react'
import './card.css';

export default function Card(props) {
    const {details} = props;
    // console.log(details);
    let price = details.price;
  return (
    <div className='card'>
        <img src={details.img}/>
        <div className='description-container'>
            <p>{details.name}</p>
            {details.target_irr==='n/a'?<p className='irr'>0% IRR</p>:<p class='irr'>{details.target_irr}% IRR</p>}
            
        </div>
        <p className='price'>Price: {price.toLocaleString()}</p>
        <div className='description-container'>
            <p className='collection'>{details.collection}</p>
            {typeof(details.target_coc)!=='string'?<p className='coc'>{Math.floor(details.target_coc)}% CoC</p>:<p className='coc'>0% CoC</p>}
        </div>
        <progress id="file" value="32" max="100"> 50% </progress>
        <div className='description-container'>
            <p>32%</p>
            {details.total_invest!=='unknown'?<p className='coc'>{details.total_invest} tokens left</p>:<p className='coc'>0 tokens left</p>}
        </div>
    </div>
  )
}
