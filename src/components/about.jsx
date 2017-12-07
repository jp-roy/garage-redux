import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <img src="http://www.popcorngarage.com/assets/img/share/pinterest/PoPCorn_Garage_1280.jpg" alt=""/>
      <div className="information">
        Du text super intéressant sur mon garage
      </div>
      <Link className="btn btn-danger" to="/cars/new">
        Add a car
      </Link>
    </div>
  );
};

export default About;
