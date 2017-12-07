import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import About from '../components/about.jsx';

import { required, format } from '../utils/validations.js';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, this.props.garage, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField = (field) => {
    const { input, label, type, meta: { touched, error }} = field;
    const formClasses = `form-group ${error && touched ? "has-error" : null}`;
    return (
      <div className={formClasses}>
        <label className="control-label">{label}</label>
        <input {...input}
          className="form-control"
          placeholder={label}
          type={type}
        />
        {touched && ((error && <span class="help-block">{error}</span>))}
      </div>
    );
  }

  render() {
    return (
      <div className="main">
        <About page="cars_new"/>
        <div className="cars">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
              validate={[ required ]}
            />
            <Field
              label="Model"
              name="model"
              type="text"
              component={this.renderField}
              validate={[ required ]}
            />
            <Field
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
              validate={[ required ]}
            />
            <Field
              label="Plate"
              name="plate"
              type="text"
              component={this.renderField}
              validate={[ required, format ]}
            />
            <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Add car
            </button>
          </form>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
