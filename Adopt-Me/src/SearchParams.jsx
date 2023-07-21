import { useState, useEffect } from "react";
import Pet from "./pet";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "raptile"];

function SearchParams() {
	const [location, setLocation] = useState("");
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const [pets, setPets] = useState([]);
	const [breeds] = useBreedList(animal);

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
	}

	return (
		<div className="search-params">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor="location">
					Location
					<input
						onChange={(e) => setLocation(e.target.value)}
						id="location"
						type="text"
						value={location}
						placeholder="Location"
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						name=""
						id="animal"
						value={animal}
						onChange={(e) => setAnimal(e.target.value)}
					>
						<option />
						{ANIMALS.map((animal) => (
							<option key={animal}>{animal}</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select
						name=""
						id="breed"
						disabled={breeds.length === 0}
						value={breed}
						onChange={(e) => {
							setBreed(e.target.value);
							setBreed("");
						}}
					>
						<option />
						{breeds.map((breeds) => (
							<option key={breeds}>{breeds}</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
			{pets.map((pet) => (
				<Pet
					key={pet.id}
					name={pet.name}
					animal={pet.animal}
					breed={pet.breed}
				/>
			))}
		</div>
	);
}

export default SearchParams;