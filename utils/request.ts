export const photoBaseUrl =
	"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

export const fetchPlaces = async (query: string) => {
	const response = await fetch(`api/google-place-api?query=${query}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.json();
	return result.results;
};
