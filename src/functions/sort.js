//modification of bubble sorting method
//pure func
/*
	returns the array of objects with shape: 
	{
		title: string,
		url: string,
		date: string
	} 
	sorted by descending date 
*/
const sort = (items) => {
	const swap = (i, j, arr) => {
		let a = arr[i];
		arr[i] = arr[j];
		arr[j] = a;
	}

	let sortedItems = [];

	for (let i = 0; i < items.length; i++) sortedItems.push(items[i]);

	for (let i = 0; i < items.length; i++) {
		const currentDateArr = sortedItems[i].date.split('-');
		
		for (let j = 0; j < items.length; j++) {
			if (j > i) {
				
				let later = false;
				const varDateArr = sortedItems[j].date.split('-');
				
				for (let k = 0; k < varDateArr.length; k++) {
					if (+varDateArr[k] > +currentDateArr[k]) {
						later = true;
						break;
					} else if (+varDateArr[k] < +currentDateArr[k]) {
						break;
					}
				}

				if (later) swap(i, j, sortedItems);
			}
		}
	}

	return sortedItems;
};

export default sort;