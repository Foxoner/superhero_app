import React from 'react';
import Card from './Card';

const CardList = ({ heroes, getHeroCard }) => {
  return (
    <div>
      {
        heroes.map((hero, i) => {
          let cardItemData = {
            nickname: hero.nickname,
            real_name: hero.real_name,
            origin_description: hero.origin_description,
            superpowers: hero.superpowers,
            catch_phrase: hero.catch_phrase,
            images: hero.images,
            main_image_index: hero.main_image_index
          }
          return (
            <Card
              key={i}
              cardItemData={cardItemData}
              getHeroCard={getHeroCard}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;