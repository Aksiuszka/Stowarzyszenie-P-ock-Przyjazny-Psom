import React from 'react';
import { useState, useEffect } from 'react';
import useBreed from '../../Hooks/useBreed/useBreed'
import Result from '../Results/Results';

function Search() {
	const animalTypes = ['dog', 'cat'];
	const [animal, setAnimal] = useState('');
	const [location, setLocation] = useState('');
	const [breed, setBreed] = useState('');
	const [pets, setPets] = useState([]);
	const [breeds] = useBreed(animal);
	
	const onLocationChange = (e) => {
		setLocation(e.target.value);
	};
	const onAnimalTypeChange = (e) => {
		setAnimal(e.target.value);
	};
	const onBreedChange = (e) => {
		setBreed(e.target.value);
	};
	useEffect(() => {
		requestPets();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
		const json = await res.json();

		setPets(json.pets);
		console.log(pets);
	}
	const handleSubmit= e =>{
		e.preventDefault();
		requestPets();
	}
	return (
		<div>
			<form
			onSubmit={handleSubmit}>
				<label htmlFor="location">
					<input
						id="location"
						value={location}
						placeholder="Miejscowość"
						onChange={onLocationChange}
					></input>
				</label>
				<label>
					<select
						value={animal}
						onChange={onAnimalTypeChange}
						onBlur={onAnimalTypeChange}
					>
						<option />
						{animalTypes.map((animal) => (
							<option value={animal} key={animal}>
								{animal}
							</option>
						))}
					</select>
					<select value={breed} onChange={onBreedChange} onBlur={onBreedChange}>
						<option />
						{breeds.map((breedType) => (
							<option value={breedType} key={breedType}>
								{breedType}
							</option>
						))}
					</select>
				</label>
				<button type="submit">Sumbit</button>
			</form>
		<Result pets ={pets}/>
		</div>
	);
}

export default Search;
