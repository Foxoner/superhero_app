import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ModalHero from '../components/ModalHero';
import ModalNewOne from '../components/ModalNewOne';
import './App.css';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);
  const [showModalHero, setShowModalHero] = useState(false);
  const [showModalNewOne, setShowModalNewOne] = useState(false);
  const [heroCardData, setHeroCardData] = useState({nickname: '',
                                                    real_name: '',
                                                    origin_description: '',
                                                    superpowers: '',
                                                    catch_phrase: '',
                                                    images:[],
                                                    main_image_index: 0});
  const [newImgUrl, setNewImgUrl] = useState('');
  const [mainImgIndex, setMainImgIndex] = useState(0);
  
  // const dataHero = [
  //   {nickname: 'Superman',
  //    real_name: 'Clark Kent',
  //    origin_description: `He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…`,
  //    superpowers: `solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…`,
  //    catch_phrase: `Look, up in the sky, it's a bird, it's a plane, it's Superman!`,
  //    images: ['https://www.dc.com/sites/default/files/Char_Gallery_Superman_SUP01_16_5b9b02501915d5.80725381.jpg',
  //             'https://www.dc.com/sites/default/files/GalleryChar_1900x900_SUPUN4_3_52ab8fd51b5a34.80060929.jpg',
  //             'https://www.dc.com/sites/default/files/GalleryChar_1900x900_allstarSuperman_52ab8fc670d367.92768430.jpg'],
  //    main_image_index: 0
  //   },
  //   {nickname: 'Batman',
  //    real_name: 'Bruce Wayne',
  //    origin_description: 'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
  //    superpowers: 'exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology',
  //    catch_phrase: 'I am a superhero!',
  //    images: ['https://www.dc.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg',
  //             'https://www.dc.com/sites/default/files/Movies-Gallery_JusticeLeague2017_BM_59f8bd4ac1e9e5.69884061.jpg',
  //             'https://www.dc.com/sites/default/files/GalleryChar_1920x1080_Hush_54b5d1be8e4ca8.68343525.jpg'],
  //    main_image_index: 0
  //   },
  //   {nickname: 'Riddler',
  //    real_name: 'Edward Nygma',
  //    origin_description: `One of the Dark Knight's most infamous villains, Edward Nygma enjoys flaunting his intellectual superiority by conducting crimes and leaving clues for Batman to piece together.`,
  //    superpowers: 'genius-level intellect',
  //    catch_phrase: 'I am a superhero!',
  //    images: ['https://cdn.mos.cms.futurecdn.net/9DuRDMcZpU7fsoRzP6nuii.jpg',
  //             'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/02/12184035/Riddler-DC-Comics-Art.jpg',
  //             'https://www.denofgeek.com/wp-content/uploads/2019/09/the-riddler-year-of-the-villain-batman-dc.png?fit=669%2C416'],
  //    main_image_index: 0
  //   },
  //   {nickname: 'Catwoman',
  //    real_name: 'Selina Kyle',
  //    origin_description: `As deadly as she is beautiful, infamous cat-burglar Selina Kyle uses her nine lives to walk the razor's edge between light and darkness in Gotham City.`,
  //    superpowers: 'exceptional martial artist, gymnastic ability, combat skill',
  //    catch_phrase: 'I am a superhero!',
  //    images: ['https://www.dc.com/sites/default/files/GalleryChar_1900x900_Catwoman_52ab9c21818074.19952677.jpg',
  //             'https://www.dc.com/sites/default/files/Char_Gallery_Catwoman_theBatman2022_6219acfe5c52b1.51645758.jpg',
  //             'https://www.dc.com/sites/default/files/GalleryChar_Gotham_Catwoman_541d34ce34d083.13505729.jpg'],
  //    main_image_index: 0
  //   }
  // ]
  

  useEffect(()=> {
    fetch('https://superhero-app-x.herokuapp.com/get_heroes')
    .then(response => response.json())
    .then(heroes_list => {
            setHeroes(heroes_list);
        })
  },[]) // if you add count, only run if count changes.

  const getHeroCard = (data) => {
    setHeroCardData(data)
    setShowModalHero(true)
  }

  const addHeroImage = (data, heroname) => {
    heroCardData.images.push(data)
    fetch('https://superhero-app-x.herokuapp.com/add_image', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                body: JSON.stringify({
                    data: heroCardData.images,
                    heroname: heroname
                })
            })
            .then(response => response.json())
            .then(data => setHeroes(data))
  }

  const getMainCardImage = (index, heroname) => {
    fetch('https://superhero-app-x.herokuapp.com/update_image', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                body: JSON.stringify({
                    index: index,
                    heroname: heroname
                })
            })
            .then(response => response.json())
            .then(data => setHeroes(data))
    // heroes.forEach(item => {
    //   if (item.nickname == heroname) {
    //     item.main_image_index = index
    //   }
    // })
  }

  const getNewHero = (data) => {
    fetch('https://superhero-app-x.herokuapp.com/new_hero', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                body: JSON.stringify({
                    nickname: data.nickname,
                    real_name: data.real_name,
                    origin_description: data.origin_description,
                    superpowers: data.superpowers,
                    catch_phrase: data.catch_phrase,
                    images: data.images,
                    main_image_index: 0
                })
            })
            .then(response => response.json())
            .then(data => setHeroes(data))
    // heroes.push(data);
  }

  const deleteHero = (heroname) => {
        fetch('https://superhero-app-x.herokuapp.com/delete_hero', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                body: JSON.stringify({
                    heroname: heroname
                })
            })
            .then(response => response.json())
            .then(data => setHeroes(data))
    // heroes.forEach((item, i) => {
    //   if (item.nickname == heroname) {
    //     heroes.splice(i, 1)
    //   }
    // })
  }

  const delCardImg = (index, heroname) => {
    heroCardData.images.splice(index, 1);
    fetch('https://superhero-app-x.herokuapp.com/delete_image', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                body: JSON.stringify({
                    data: heroCardData.images,
                    heroname: heroname
                })
            })
            .then(response => response.json())
            .then(data => setHeroes(data))
  }

  const filtredHeroes = heroes.filter(hero => {
    return hero.nickname.toLowerCase().includes(searchfield.toLowerCase());
  })

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  return !heroes.length ?
    <h1>Loading...</h1> :
    (
      <div className='tc'>
        <div className='wrapper'>
          <h1 className='f1'>SuperHeroes</h1>
          <SearchBox searchChange={onSearchChange}/>
          <button data-testid="new-btn" onClick={() => setShowModalNewOne(true)} className='new_hero_button'>Add NEW Hero</button><br/>
          <div className='switch_btn'>
            <button className='switch_btn_pos' onClick={() => setCount(count-5)}>Prev page</button>
            <button className='switch_btn_pos' onClick={()=>setCount(count+5)}>Next page</button>
          </div>
        </div>
        <ModalNewOne showModalNewOne={showModalNewOne} onCloseModal={() => setShowModalNewOne(false)} getNewHero={getNewHero} />
        <ModalHero showModalHero={showModalHero} onCloseModal={() => setShowModalHero(false)} heroCardData={heroCardData} 
        addHeroImage={addHeroImage} getMainCardImage={getMainCardImage} deleteHero={deleteHero} delCardImg={delCardImg}/>
        <Scroll>
          <CardList heroes= {filtredHeroes.slice(count, count + 5)} getHeroCard={getHeroCard} />
        </Scroll>
      </div>
    );
}


export default App;