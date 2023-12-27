'use client';
import { useState } from 'react';
import ReviewField from './review-field';

function ReviewFieldContainer() {
	const [fields, setFields] = useState<number[]>([0]);

	const addField = () => {
		if (fields.length > 0) {
			const proxId = fields[fields.length - 1] + 1;
			setFields([...fields, proxId]);
		} else {
			setFields([0]);
		}
	};

	const removeField = (id: number) => {
		setFields(fields.filter((element) => id !== element));
	};

	return (
		<div className='flex flex-col gap-4'>
			{fields.map((id) => {
				return <ReviewField key={id} id={id} onClick={removeField} />;
			})}
			<button onClick={addField} className='text-center p-2 border border-gray-300 rounded-md hover:bg-gray-200'>
				Agregar sección
			</button>
		</div>
	);
}
export default ReviewFieldContainer;
