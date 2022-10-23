import React from 'react';

const Card = ({ cardItemData, getHeroCard }) => {
  // console.log(cardItemData.main_image_index)
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card' onClick={() => getHeroCard(cardItemData)}>
      <div>
        <img alt='hero' className='card_image' src={cardItemData.images[cardItemData.main_image_index]}  />
      </div>
      <div>
        <h2>{cardItemData.nickname}</h2>
      </div>
    </div>
  );
}

export default Card;