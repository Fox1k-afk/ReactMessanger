import React from 'react';
import { useFormikContext } from 'formik';

const SendButton = () => {
	const { isValid } = useFormikContext();
	return (
		<div>
			<button type='submit' disabled={!isValid}>
				Send
			</button>
		</div>
	);
};

export default SendButton;
