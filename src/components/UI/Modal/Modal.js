import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
	return (
		<>
			<Backdrop show={props.show} clicked={props.close} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0',
				}}>
				{props.children}
			</div>
		</>
	);
};

export default React.memo(
	Modal,
	(prevProps, nextProps) =>
		nextProps.show === prevProps.show &&
		nextProps.clicked === prevProps.children
);
