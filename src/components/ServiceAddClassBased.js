import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeServiceField, addService, removeService, clearServiceFields} from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => {
    const {item} = this.props;
    evt.preventDefault();
    if (!item.editId) {
      this.props.onSave(item.name, item.price);
      return;
    }
    this.props.onRemove(item.editId);
    this.props.onSave(item.name, item.price);
  }

  handleCancel = evt => {
    evt.preventDefault();
    this.props.onClear();
  }

  render() {
    const { item } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' onChange={this.handleChange} value={item.name} />
        <input name='price' onChange={this.handleChange} value={item.price} />
        <button type='submit'>Save</button>
        {item.editId && <button onClick={this.handleCancel}>Cancel</button>}
      </form>
    );
  }
}


ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (name, price) => dispatch(addService(name, price)),
    onRemove: (id) => dispatch(removeService(id)),
    onClear: () => dispatch(clearServiceFields())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
