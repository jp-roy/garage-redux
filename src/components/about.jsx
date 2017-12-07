import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  callToAction(action) {
    switch(action) {
      case 'cars':
        return (
          <Link className="btn btn-danger" to="/cars/new">
            Add a car
          </Link>
        );
      case 'cars_new':
        return (
          <Link className="btn btn-primary" to="/">
            Back to List
          </Link>
        );
    }
  }

  render() {
    return (
      <div className="about">
        <img src="http://www.popcorngarage.com/assets/img/share/pinterest/PoPCorn_Garage_1280.jpg" alt="" />
        <div className="information">
          Du text super intéressant sur mon garage
        </div>
        {this.callToAction(this.props.page)}
      </div>
    );
  }
};

export default About;
