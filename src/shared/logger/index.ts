export const logger = {
	error: (place: string, message: unknown) => {
		console.error(place, message);
	},
	log: (place: string, message: unknown) => {
		console.log(place, message);
	},
};
