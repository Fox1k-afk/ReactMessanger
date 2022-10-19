import React from 'react';
import { useFormikContext } from 'formik';

const SaveButton = () => {
	const { isValid } = useFormikContext();
	return (
		<div>
			<button type='submit' disabled={!isValid}>
				Save
			</button>
		</div>
	);
};

export default SaveButton;
