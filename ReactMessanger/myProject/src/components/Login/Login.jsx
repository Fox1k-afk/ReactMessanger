import React from 'react';
import { Form, Formik, Field, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import SaveButton from './SendButton';

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

const Login = (props) => {
	const [inpVal] = useState(INITIAL_INPUT_VALUE);

	function onSubmit(values) {
		console.log(JSON.stringify(values, null, 2));

		console.log(values);
	}

	function getStyles(errors, fieldName) {
		if (getIn(errors, fieldName)) {
			return {
				border: '1px solid red',
			};
		}
	}

	function CustomInput({ field, form: { errors } }) {
		return (
			<div>
				<input {...field} style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component='div'
					style={{ color: 'crimson' }}
				/>
			</div>
		);
	}

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
						<Field
							type='email'
							name='email'
							component={CustomInput}
							placeholder='Enter your email'
						/>
					</div>

					<div>
						<Field
							type='password'
							name='password'
							component={CustomInput}
							placeholder='Enter your password '
						/>
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

export default Login;
