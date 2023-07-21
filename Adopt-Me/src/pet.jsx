/* eslint-disable react/prop-types */
const Pet = ({ name = "default", animal = "cat", breed = "na" }) => {
	return (
		<div>
			<h1>{name}</h1>
			<h2>{animal}</h2>
			<h3>{breed}</h3>
		</div>
	);
};

export default Pet;
