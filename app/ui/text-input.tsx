function TextInput({
	name,
	id,
	placeholder,
	ariaDescribedBy,
	onChange,
}: {
	name: string;
	id: string;
	placeholder: string;
	ariaDescribedBy: string;
	onChange?: (e: any) => void;
}) {
	return (
		<input
			type='text'
			name={name}
			id={id}
			className='w-full p-2 bg-transparent border-2 border-gray-400 rounded-md'
			placeholder={placeholder}
			aria-describedby={ariaDescribedBy}
			onChange={onChange}
		/>
	);
}
export default TextInput;
