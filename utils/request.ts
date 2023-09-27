export const photoBaseUrl =
	"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

export const fetchPlaces = async (query: string) => {
	const response = await fetch(
		`http://localhost:3000/api/google-place-api?query=${query}`
	);
	const result = await response.json();
	return result.results;
};
