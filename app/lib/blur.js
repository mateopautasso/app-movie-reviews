const blurCard =
	'data:image/webp;base64,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';
export default blurCard;