import {useState} from 'react';
import './Carousel.css';
import delay from '../../functions/delay.js'

const Carousel = ({items, time}) => {
	const length = items.length;

	const [currentInd, setCurrentInd] = useState(0);
	const [visible, setVisible] = useState(true);

	const toNext = () => {
		if (currentInd !== length - 1) {
			setVisible(false);
			delay(() => setCurrentInd(currentInd + 1), time);
			delay(() => setVisible(true), time);
		}
	};

	const toPrev = () => {
		if (currentInd !== 0) {
			setVisible(false);
			delay(() => setCurrentInd(currentInd - 1), time);
			delay(() => setVisible(true), time);
		}
	};

	return (
		<section className="carousel">
			{(items.length !== 0) && (
				<ul className="carousel-content">
					{items.map((item, index) => (
						<li
							className={"carousel-item" + (visible ? ' visible' : '')}
							style={{
								display: (index === currentInd) ? 'block' : 'none',
								transitionDuration: `${time}s`
							}}
							key={index}
						>
							<p className="text">{item.text}</p>
							<p className="author">
								<span className="name">{item.name + ", "}</span>
								<span className="inst">{item.instagram_username}</span>
							</p>
						</li>
					))}
				</ul>
			)
			}
			<div className="placeholder" />
			<div 
				className={"prev-button" + (currentInd === 0 ? ' disabled' : '')}
				onClick={() => toPrev()} 
			>
				<div className="arrow"/>
			</div>
			<div 
				className={"next-button" + (currentInd === length - 1 ? ' disabled' : '')}
				onClick={() => toNext()}
			>
				<div className="arrow"/>
			</div>
		</section>
	);
}

export default Carousel;