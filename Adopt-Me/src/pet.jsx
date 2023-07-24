const Pet = ({
	name = "default",
	animal = "cat",
	breed = "na",
	images = "No Image Found",
	location = "NA",
	id = "NA",
}) => {
	let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
	if (images.length) {
		hero = images[0];
	}
	return (
		<a href={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={hero} alt={name} />
			</div>
		</a>
	);
};

export default Pet;
