import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService, clearServiceFields} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
			evt.preventDefault();
			if (!item.editId) {
				dispatch(addService(item.name, item.price));
				return;
			}
			dispatch(removeService(item.editId));
			dispatch(addService(item.name, item.price))
	}

	const handleCancel = evt => {
		evt.preventDefault();
		dispatch(clearServiceFields());
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{item.editId && <button onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;
