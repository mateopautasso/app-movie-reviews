function StarsField() {
	return (
		<select className='p-2 bg-transparent border-2 border-gray-400 rounded-md' id='score' name='score'>
			<option value={1}>⭐</option>
			<option value={2}>⭐⭐</option>
			<option value={3}>⭐⭐⭐</option>
			<option value={4}>⭐⭐⭐⭐</option>
			<option value={5}>⭐⭐⭐⭐⭐</option>
		</select>
	);
}
export default StarsField;
