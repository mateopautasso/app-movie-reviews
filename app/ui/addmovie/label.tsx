function FormLabel({ text, htmlFor }: { text: string; htmlFor: string }) {
	return (
		<label className='text-2xl text-gray-500 m-1' htmlFor={htmlFor}>
			{text}
		</label>
	);
}
export default FormLabel;
