import React from 'react';
import { useState } from 'react';

function Search() {
	const animalTypes = ['pies', 'kot', 'gryzon', 'inne / egzotyczne'];
    const breeds =['pudel', 'mix'];
	const [animalType, setAnimalType] = useState('');
	const [location, setLocation] = useState('');
    const [breed, setBreed] = useState("");
	const onLocationChange = (e) => {
		setLocation(e.target.value);
	};
	const onAnimalTypeChange = (e) => {
		setAnimalType(e.target.value);
	};
    const onBreedChange = (e) => {
		setBreed(e.target.value);
	};
	return (
		<div>
			<form>
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
						value={animalType}
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
                    <select
						value={breed}
						onChange={onBreedChange}
						onBlur={onBreedChange}
					>
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
		</div>
	);
}

export default Search;
