
export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': '27c32d5042mshd42ae4553bae9dfp1e9c7fjsn1b30efc954c8',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
		headers: headers
	});
	const result = await response.json();
	return result;
}