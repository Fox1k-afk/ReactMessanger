import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import SaveButton from './SaveButton';

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
						<Field type='email' name='email' placeholder='Enter your email' />
						<ErrorMessage name='email' component='div' style={{ color: 'crimson' }} />
					</div>

					<div>
						<Field
							type='password'
							name='password'
							placeholder='Enter your password '
						/>
						<ErrorMessage
							name='password'
							component='div'
							style={{ color: 'crimson' }}
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
