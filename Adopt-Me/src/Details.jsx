import { useParams } from "react-router-dom";

function Details() {
	const { id } = useParams();
	return (
		<div>
			return <h2>{id}</h2>
		</div>
	);
}

export default Details;
