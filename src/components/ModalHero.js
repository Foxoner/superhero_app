import React, { useState } from "react";
import ImageGallery from './ImageGallery';

const ModalHero = (props) => {
    const [mainImgIndex, setMainImgIndex] = useState(0);
    const [inputNewImg, setInputNewImg] = useState('');

    const changeImage = (index) => {
        setMainImgIndex(index)
    }

    const onInputNewImgChange = (event) => {
        setInputNewImg(event.target.value)
    }

    const clearInput = () => {
        setInputNewImg('')
    }


    if (!props.showModalHero) {
        return null
    }
    return(
        <div className="modal">
            <div className="modal_content">
                <div className='modal_image'>
                    <img src={props.heroCardData.images[mainImgIndex]} alt="heropic" />
                </div>
                <div className="modal_text">
                    <div>
                        <h2 className="modal_title">{props.heroCardData.nickname}</h2>
                        <h4>Real name:</h4>
                        <p>{props.heroCardData.real_name}</p>
                        <h4>Description:</h4>
                        <p>{props.heroCardData.origin_description}</p>
                        <h4>Superpowers:</h4>
                        <p>{props.heroCardData.superpowers}</p>
                        <h4>Catch phrase:</h4>
                        <p>{props.heroCardData.catch_phrase}</p>
                    </div>
                    <div className='modal_image-gallery'>
                        <h4>Gallery:</h4>
                        <div className='gallery'>
                            <ImageGallery images={props.heroCardData.images} changeImage={changeImage} getMainCardImage={props.getMainCardImage} heroName={props.heroCardData.nickname} delCardImg={props.delCardImg}/>
                        </div>
                    </div>
                    <div className="modal_footer">
                        <div>
                            <input type="text" placeholder='Give me URL' onChange={onInputNewImgChange} value={inputNewImg} />
                            <button data-testid="addimg-btn" onClick={() => {props.addHeroImage(inputNewImg, props.heroCardData.nickname); clearInput()}}>Add New hero image!</button>
                        </div>
                        <div className='modal_buttons_block'>
                        <button data-testid="close-btn" onClick={props.onCloseModal} className="modal_button" >Close</button>
                        <button data-testid="delete-btn" onClick={() => props.deleteHero(props.heroCardData.nickname)} className="modal_button delete-button" >Delete Hero</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalHero;