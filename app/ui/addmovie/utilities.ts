export const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const formData = new FormData(e.currentTarget);
	const id = crypto.randomUUID();
	const title = formData.get('addmovie-title');
	const poster = formData.get('addmovie-poster') as File;
	const review = formData.get('addmovie-review');
	const score = Number(formData.get('addmovie-score'));

	const reader = new FileReader();
	reader.readAsDataURL(poster);
	reader.onload = () => {
		const posterBase64 = reader.result;
		console.log({ id, title, posterBase64, review, score });
	};
};
