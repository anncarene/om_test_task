import {useState, useEffect} from 'react';
import './BlogPostsGroup.css';
import delay from '../../functions/delay.js';
import BlogPost from '../BlogPost';
import sort from '../../functions/sort.js'

const BlogPostsGroup = ({
	time,
	items,
	visible
}) => {
	const [displayed, setDisplayed] = useState(false);
	const [built, setbuilt] = useState(false);
	const itemsCount = items.length;

	useEffect(() => {
		if (visible && !displayed) setDisplayed(true);
		else if (!visible && displayed){
			delay(() => setDisplayed(false), time);
		}
	}, [visible]);

	return (
		<ul 
			className="blogposts"
			style={{
				display: (displayed ? 'grid' : 'none'),
				transitionDuration: `${time}s`
			}}
		>
			{(sort(items)).map((item, index) => (
				<li className="post" key={item.url}>
					<BlogPost 
						title={item.title}
						url={item.url}
						date={item.date}
						index={index}
						time={time}
						itemsCount={itemsCount}
						visible={visible}
					/>
				</li>
			))}
		</ul>
	);
}

export default BlogPostsGroup;