function ReviewField({ id, onClick }: { id: number; onClick: (id: number) => void }) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex flex-col'>
				<label htmlFor='title-section' className='text-gray-500 ml-1'>
					Título de la sección:
				</label>
				<input
					type='text'
					name='title-section'
					id='title-section'
					className='p-2 bg-transparent border-2 border-gray-400 rounded-md'
					placeholder='Aparición del T-Rex'
					required
				/>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='content-section' className='text-gray-500 ml-1'>
					Contenido:
				</label>
				<textarea
					className='p-2 bg-transparent border-2 border-gray-400 rounded-md resize-none'
					id='content-section'
					name='content-section'
					placeholder='Me encanto la parte en la que el T-Rex se comió a Jack...'
					rows={10}
					required
				/>
			</div>

			<button className='p-2 border text-sm font-semibold border-gray-300 rounded-md hover:bg-gray-200' onClick={() => onClick(id)}>
				Eliminar sección
			</button>
		</div>
	);
}
export default ReviewField;
