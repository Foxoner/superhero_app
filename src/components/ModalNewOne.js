import React, { useState, useEffect } from "react";

const ModalNewOne = (props) => {

    const getNewHeroData = (e) => {
        e.preventDefault();
        const data = {nickname: e.target.elements.nick.value,
                    real_name: e.target.elements.real_name.value,
                    origin_description: e.target.elements.description.value,
                    superpowers: e.target.elements.superpowers.value,
                    catch_phrase: e.target.elements.phrase.value,
                    images: [e.target.elements.image.value],
                    main_image_index: 0}
        props.getNewHero(data)
        e.target.elements.nick.value = '';
        e.target.elements.real_name.value = '';
        e.target.elements.description.value = '';
        e.target.elements.superpowers.value = '';
        e.target.elements.phrase.value = '';
        e.target.elements.image.value = [];
        console.log(data)
    }


    if (!props.showModalNewOne) {
        return null
    }
    return(
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h3 className="modal_title">Let`s Add new Superhero</h3>
                </div>
                <form onSubmit={(e) => getNewHeroData(e)}>
                    <div className="modal_body">
                        <h4>Nickname:</h4>
                        <input data-testid="nick_input" type="text" name="nick" placeholder='Enter hero name'/>
                        <h4>Real name:</h4>
                        <input data-testid="real_name_input" type="text" name="real_name" placeholder='Enter real name' defaultValue="Unknown"/>
                        <h4>Description:</h4>
                        <textarea data-testid="description_input" name="description" cols="30" rows="5"></textarea>
                        <h4>Superpowers:</h4>
                        <textarea data-testid="superpowers_input" name="superpowers" cols="30" rows="5"></textarea>
                        <h4>Catch phrase:</h4>
                        <textarea data-testid="phrase_input" name="phrase" cols="30" rows="5"></textarea>
                        <h4>Image:</h4>
                        <input data-testid="img_input" type="text" name="image" placeholder='Enter URL of hero image' />
                    </div>
                    <div className="modal_footer">
                        <div className='modal_buttons_block'>
                            <button data-testid="close_btn" onClick={props.onCloseModal} className="modal_button">Close</button>
                            <button data-testid="create_btn" type='submit' className="modal_button">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalNewOne;