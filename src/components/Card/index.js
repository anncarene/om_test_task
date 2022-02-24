const Card = ({to, imgsrc, caption}) => {
	return (
		<a href={to} className="card" target="_blank">
			<img src={imgsrc} alt="..."/>
			<div className="caption">{caption}</div>
		</a>
	);
}

export default Card;
