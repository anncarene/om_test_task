import {useEffect, useState} from 'react';
import delay from '../../functions/delay.js';

const BlogPost = ({
	title,
	url,
	date,
	time,
	visible,
	index,
	itemsCount
}) => {
	const [appearing, setAppearing] = useState(false);
	const timePart = time / itemsCount;

	useEffect(() => {
		const countedDelay = (count, time) => {
			if (count === 0) setAppearing(!appearing);
			else delay(() => countedDelay(count - 1, time), time);
		};

		if (visible && !appearing) {
			countedDelay(index, timePart);
		} else if (!visible && appearing){
			const invertedIndex = itemsCount - 1 - index;
			countedDelay(invertedIndex, timePart);			
		}
	}, [visible]);

	return (
		<a 
			href={url}
			style={{
				transitionDuration: `${timePart}s`
			}}
			className={appearing ? 'appearing' : ''}
			target="_blank"
		>
			<div className='date'>{date}</div>
			<div className='title'>{title}</div>
		</a>
	);
}

export default BlogPost;
