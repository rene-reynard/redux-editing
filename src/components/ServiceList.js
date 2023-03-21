import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, changeServiceField, changeEditId, clearServiceFields} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const editId = useSelector(state => state.serviceAdd.editId);
  const dispatch = useDispatch();

  const handleRemove = id => {
    if (!editId || editId !== id) {
      dispatch(removeService(id));
    }
    //если в режиме редактирования или id не совпадает - очищаем форму
    dispatch(clearServiceFields());
  }

  const handleEdit = item => {
    const {id, name, price} = item;
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
    dispatch(changeEditId(id))
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
