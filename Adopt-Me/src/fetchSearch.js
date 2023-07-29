async function fetchSearch({ queryKey }) {
	const { animal, breed, location } = queryKey[1];
	const res = await fetch(
		`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
	);

	if (!res.ok) {
		throw new Error(`An error has occured: ${res.status}`);
	}

	return res.json();
}

export default fetchSearch;
