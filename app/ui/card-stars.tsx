const determineScore = (score: number) => {
	let stars = [];
	for (let i = 0; i < score; i++) {
		stars.push('⭐');
	}
	const starsToString = stars.join('');
	return starsToString;
};

function CardStars({ score }: { score: number }) {
	return (
		<h4 className='text-xl font-bold display flex justify-start items-center'>
			Puntuación:&nbsp;<p className='text-lg inline'>{determineScore(score)}.</p>
		</h4>
	);
}
export default CardStars;
