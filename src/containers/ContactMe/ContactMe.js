import React, { useState } from 'react';
import Input from '../../components/UI/Input/Input';
import { updateObject } from '../../shared/utility';
import { checkValidity } from '../../shared/utility';
import classes from './ContactMe.module.css';
import Button from '../../components/UI/Button/Button';
import axios from '../../shared/axios';

const ContactMe = (props) => {
	const initialMessage = {
		name: {
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'your name',
			},
			value: '',
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
		},
		email: {
			elementType: 'input',
			elementConfig: {
				type: 'email',
				placeholder: 'your email',
			},
			value: '',
			validation: {
				required: true,
				isEmail: true,
			},
			valid: false,
			touched: false,
		},
		message: {
			elementType: 'textarea',
			value: '',
			elementConfig: {
				placeholder: 'say hello',
			},
			validation: {
				required: true,
			},
			valid: true,
		},
	};
	const [fullMessage, setFullMessage] = useState(initialMessage);
	const [sending, setSending] = useState(false);
	const [isValid, setFormValidity] = useState(false);
	const [sentSuccess, setSentSuccess] = useState(false);
	const [error, setError] = useState(false)

	const submitHandler = (event) => {
		event.preventDefault();
		setSending(true);
	};

	const clearFields = () => {
		setFullMessage(initialMessage);
		setSentSuccess(true)
	};

	const sendMessage = () => {
		const message = {
			replyTo: fullMessage.email.value,
			text: `FROM:
	 ${
			'Name:' +
			' ' +
			fullMessage.name.value +
			' ' +
			'Email:' +
			' ' +
			fullMessage.email.value
		}|| ${fullMessage.message.value}`,
		};
		axios
			.post('/api/sendemail', message, {timeout: 6000})
			.then((res) => {
				if (res.data === 'was sent') {
					clearFields();
				}
			})
			.catch((err) => setError(err.message));
		setSending(false);
	};
	const inputChangedHandler = (event, inputIdentifier) => {
		const updatedFormElement = updateObject(fullMessage[inputIdentifier], {
			value: event.target.value,
			valid: checkValidity(
				event.target.value,
				fullMessage[inputIdentifier].validation
			),
			touched: true,
		});
		const updatedFullMessage = updateObject(fullMessage, {
			[inputIdentifier]: updatedFormElement,
		});
		let formIsValid = true;
		for (let inputIdentifier in updatedFullMessage) {
			formIsValid = updatedFullMessage[inputIdentifier].valid && formIsValid;
		}
		setFullMessage(updatedFullMessage);
		setFormValidity(formIsValid);
	};

	const formElementsArray = [];
	for (let key in fullMessage) {
		formElementsArray.push({ id: key, config: fullMessage[key] });
	}
	let sendingStatus =
	<Button
		btnType='Success'
		disabled={!isValid}
		clicked={() => sendMessage()}>
		SEND
	</Button>

	if(sending){
		sendingStatus = 	<Button
		btnType='Success'
		disabled
>
		SENDING...
	</Button>
	}
	if(sentSuccess){
		sendingStatus = 	<Button
		btnType='Success'
		disabled
>
		SENT!
	</Button>
	}
	if(error){
		sendingStatus = 	<Button
		btnType='Success'
		disabled
>
		Sorry, something went wrong
	</Button>
	}
	let form = (
		<form className={classes.Form} onSubmit={submitHandler}>
			{formElementsArray.map((formElement) => (
				<Input
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					label={formElement.id}
					value={formElement.config.value}
					changed={(event) => inputChangedHandler(event, formElement.id)}
					invalid={!formElement.config.valid}
					shouldValidate={formElement.config.validation}
					touched={formElement.config.touched}
				/>
			))}
	 <div className={classes.ButtonContainer}>{sendingStatus}</div>
		</form>
	);

	return (
		<div className={classes.ContactData}>
			<h4>Send Me A Message:</h4>
			{form}
		</div>
	);
};

export default ContactMe;
