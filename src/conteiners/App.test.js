import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
import ModalHero from '../components/ModalHero';
import ModalNewOne from '../components/ModalNewOne'

const heroCardData =
    {nickname: 'Superman',
     real_name: 'Clark Kent',
     origin_description: `He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…`,
     superpowers: `solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…`,
     catch_phrase: `Look, up in the sky, it's a bird, it's a plane, it's Superman!`,
     images: ['https://www.dc.com/sites/default/files/Char_Gallery_Superman_SUP01_16_5b9b02501915d5.80725381.jpg',
              'https://www.dc.com/sites/default/files/GalleryChar_1900x900_SUPUN4_3_52ab8fd51b5a34.80060929.jpg',
              'https://www.dc.com/sites/default/files/GalleryChar_1900x900_allstarSuperman_52ab8fc670d367.92768430.jpg'],
     main_image_index: 0
    }

describe('TEST APP', () => {
	test('first render', () => {
		render(<App />);
		const loadingElement = screen.getByText(/loading/i);
		expect(loadingElement).toBeInTheDocument();
	});

})

describe('TEST MODAL', () => {
	test('elements of modal hero window', () => {
		render(<ModalHero showModalHero={true} heroCardData={heroCardData}/>);
		const btnClose = screen.getByTestId('close-btn');
		const btnDelete = screen.getByTestId('delete-btn');
		const btnAddImg = screen.getByTestId('addimg-btn');
		const input = screen.getByPlaceholderText(/Give me URL/i);
		expect(btnClose).toBeInTheDocument();
		expect(btnDelete).toBeInTheDocument();
		expect(btnAddImg).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		screen.debug();
	});

	test('close-btn click event', () => {
		render(<ModalHero showModalHero={true} heroCardData={heroCardData}/>);
		const btn = screen.getByTestId('close-btn');
		expect(screen.queryByTestId('close-btn')).toBeInTheDocument();
		fireEvent.click(btn);
	})
})

describe('TEST MODAL NEW ONE', () => {
	test('elements of modal add new hero window', () => {
		render(<ModalNewOne showModalNewOne={true} />);
		const nick_input = screen.getByTestId('nick_input');
		const real_name_input = screen.getByTestId('real_name_input');
		const description_input = screen.getByTestId('description_input');
		const superpowers_input = screen.getByTestId('superpowers_input');
		const phrase_input = screen.getByTestId('phrase_input');
		const img_input = screen.getByTestId('img_input');
		const close_btn = screen.getByTestId('close_btn');
		const create_btn = screen.getByTestId('create_btn');
		expect(nick_input).toBeInTheDocument();
		expect(real_name_input).toBeInTheDocument();
		expect(description_input).toBeInTheDocument();
		expect(superpowers_input).toBeInTheDocument();
		expect(phrase_input).toBeInTheDocument();
		expect(img_input).toBeInTheDocument();
		expect(close_btn).toBeInTheDocument();
		expect(create_btn).toBeInTheDocument();
	});

})