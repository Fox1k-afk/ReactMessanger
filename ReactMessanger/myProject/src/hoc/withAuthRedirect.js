import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
	class RedirectComoponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to='/login' />;

			return <Component {...this.props} />;
		}
	}

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
		RedirectComoponent
	);

	return ConnectedAuthRedirectComponent;
};
