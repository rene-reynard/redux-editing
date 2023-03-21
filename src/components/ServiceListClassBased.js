import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeService, changeServiceField, changeEditId, clearServiceFields} from '../actions/actionCreators';
import {connect} from 'react-redux';

class ServiceListClassBased extends Component {
  handleRemove = id => {
    const editId = this.props.form.editId;
    if (!editId || editId !== id) {
      this.props.removeService(id);
    }
    //если в режиме редактирования или id не совпадает - очищаем форму
    this.props.clearServiceFields();
  }

  handleEdit = item => {
    const {id, name, price} = item;
    this.props.changeServiceField('name', name);
    this.props.changeServiceField('price', price);
    this.props.changeEditId(id)
  }

  render() {
    const {items} = this.props;

    return (
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => this.handleEdit(o)}>✎</button>
            <button onClick={() => this.handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
  form: state.serviceAdd
});

const mapDispatchToProps = ({
  removeService,
  changeServiceField,
  changeEditId,
  clearServiceFields
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
