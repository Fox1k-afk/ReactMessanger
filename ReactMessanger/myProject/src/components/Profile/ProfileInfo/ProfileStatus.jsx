import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};

	deActivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<div>
						<span onClick={this.activateEditMode}>
							{this.props.status || 'no-status'}
						</span>
					</div>
				) : (
					<div>
						<input
							onBlur={this.deActivateEditMode}
							onChange={this.onStatusChange}
							value={this.state.status}
							autoFocus
						/>
					</div>
				)}
			</div>
		);
	}
}
export default ProfileStatus;
