import React from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deActivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode && (
				<div>
					<span onClick={activateEditMode}> {props.status || 'no-status'}</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						autoFocus={true}
						onBlur={deActivateEditMode}
						value={status}
						onChange={onStatusChange}
					/>
				</div>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
