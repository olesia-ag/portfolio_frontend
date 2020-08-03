import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Button from '../Button/Button'

const Modal = (props) => {
	const fullMessage = {
		nmae: props.name, email: props.email, message: props.message
	}
	return (
		<>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0',
				}}
			>
				<p>
					{props.name}
					<br /> {props.email}
					<br />
					{props.message}
				</p>
				<div>
					<Button clicked={()=>props.sendMessage(fullMessage)} btnType='Success'>Send</Button>
				<Button clicked={()=>props.cancelSending()} btnType='Danger'>Cancel</Button>
				</div>

			</div>
</>
	)
}

export default React.memo(
	Modal,
	(prevProps, nextProps) =>
		nextProps.show === prevProps.show &&
		nextProps.clicked === prevProps.children
)
