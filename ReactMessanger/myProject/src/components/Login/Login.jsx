import React from 'react';
import { Form, Formik, Field, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import SaveButton from './SendButton';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const INITIAL_INPUT_VALUE = {
	email: '',
	password: '',
};

const FORM_VALIDATION_SCHEMA = {
	email: Yup.string().email().required('Email required'),
	password: Yup.string()
		.min(4, 'should be 4 chars minimum.')
		.required('Password required'),
};

const Login = ({ isAuth, login }) => {
	const [inpVal] = useState(INITIAL_INPUT_VALUE);

	function getStyles(errors, fieldName) {
		if (getIn(errors, fieldName)) {
			return {
				border: '1px solid red',
			};
		}
	}

	function EmailInput({ field, form: { errors } }) {
		return (
			<div>
				<input {...field} type='email' style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component='div'
					style={{ color: 'crimson' }}
				/>
			</div>
		);
	}
	function PasswordInput({ field, form: { errors } }) {
		return (
			<div>
				<input {...field} type='password' style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component='div'
					style={{ color: 'crimson' }}
				/>
			</div>
		);
	}

	if (isAuth) {
		return <Navigate to={'/profile'} />;
	}

	const onSubmit = (values) => {
		login(values.email, values.password, values.rememberMe);
	};

	return (
		<>
			<h1>Login</h1>
			<Formik
				initialValues={inpVal}
				validationSchema={Yup.object(FORM_VALIDATION_SCHEMA)}
				onSubmit={onSubmit}
			>
				<Form>
					<div>
						Email
						<Field name='email' component={EmailInput} />
					</div>

					<div>
						Password
						<Field name='password' component={PasswordInput} />
					</div>

					<div>
						<label>
							<Field type='checkbox' name='rememberMe' id='rememberMe' />
							remember me
						</label>
					</div>
					<SaveButton />
				</Form>
			</Formik>
		</>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
