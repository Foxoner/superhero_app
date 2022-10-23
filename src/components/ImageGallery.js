import React from "react";

const ImageGallery = ({ images, changeImage, getMainCardImage, heroName, delCardImg }) => {
	return (
		<div className='gallery_box'>
	      {
	        images.map((image, i) => {
	          return (
	          	<div className='gallery_image' key={i}>
	          		<button className='del_icon' onClick={() => delCardImg(i, heroName)}></button>
	            	<img src={image} alt="heroimage" className='gallery_image' onClick={() => { changeImage(i); getMainCardImage(i, heroName)} } />
	            </div>
	          );
	        })
	      }
	    </div>
	);
}

export default ImageGallery;