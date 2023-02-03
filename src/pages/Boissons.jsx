import React from 'react';
import { TabBoissons } from '../Components/DataBoisson';
import '../Components/Boissons.css';


function Boissons() {

return (
    <div className='pageBoisson'>
<div className='affichageBoisson'>
    <h2 className='boissons'>{TabBoissons[0].name}</h2>
    <img className='imgBoisson' src={TabBoissons[0].photo} alt="" />
    <p className='priceBoisson'>Prix : {TabBoissons[0].price}</p>
</div>
<div className='affichageBoisson'>
    <h2 className='boissons'>{TabBoissons[1].name}</h2>
    <img className='imgBoisson' src={TabBoissons[1].photo} alt="" />
    <p className='priceBoisson'>Prix : {TabBoissons[1].price}</p>
</div>
<div className='affichageBoisson'>
    <h2 className='boissons'>{TabBoissons[2].name}</h2>
    <img className='imgBoisson' src={TabBoissons[2].photo} alt="" />
    <p className='priceBoisson'>Prix : {TabBoissons[2].price}</p>
</div>
<div className='affichageBoisson'>
    <h2 className='boissons'>{TabBoissons[3].name}</h2>
    <img className='imgBoisson' src={TabBoissons[3].photo} alt="" />
    <p className='priceBoisson'>Prix : {TabBoissons[3].price}</p>
</div>
<div className='affichageBoisson'>
    <h2 className='boissons'>{TabBoissons[4].name}</h2>
    <img className='imgBoisson' src={TabBoissons[4].photo} alt="" />
    <p className='priceBoisson'>Prix : {TabBoissons[4].price}</p>
</div>
</div>
);
}

export default Boissons;