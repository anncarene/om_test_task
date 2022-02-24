/*
	creating a delay of (time) seconds
	before executing the (callback) function
*/
const delay = async (callback, time) => {
	let timeout = null;
		await new Promise((res, rej) => {
			timeout = setTimeout(() => {
			callback();

			res(null);
		}, time * 1000);
	});
	clearTimeout(timeout);
};

export default delay;