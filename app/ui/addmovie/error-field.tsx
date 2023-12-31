function ErrorField({ text, idInput }: { text: string | null; idInput: string }) {
	return (
		<p className='text-sm leading-tight mt-2 text-red-500' id={idInput} aria-live='polite' aria-atomic='true'>
			{text}
		</p>
	);
}
export default ErrorField;
