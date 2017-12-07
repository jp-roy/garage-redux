import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

import About from '../components/about.jsx';

class Cars extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <div className="cars">
          <Link to={`/cars/${car.id}`} key={car.id}>
            <div className="car-item">
              <div className="car-picture"></div>
              <h3>{`${car.brand} - ${car.model}`}</h3>
              <p>{car.owner}</p>
              <div>{car.plate}</div>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="main">
        <About />
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
