import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/index";
import { Link } from 'react-router-dom';
import { createDecipher } from "crypto";

class User extends Component {
    
  state = {
      showUserInfo: false
      };
   
  onShowClick = () => {
    this.setState({ showUserInfo: !this.state.showUserInfo });
  };
  
  onDeleteClick = id => {
    if(confirm('Are you sure?')){
    this.props.deleteUser(id)
    .catch(error => window.alert(error.message))
  }
    
  };

  getTime = (t) => {
    const time = new Date(t)
    return `${time.getDate()}:${time.getMonth() + 1}:${time.getFullYear()}`
  }

  render() {
    const { name, surname, city, address, phone, _id, created_date } = this.props.user;
    const { showUserInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} {surname}
          <i
            title="Details"
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            title="Delete"          
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, _id)}
          />
          <Link to={`user/edit/${_id}`}>
            <i
              title="Edit"            
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>
        {showUserInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
            <span className="text-danger">City:</span> {city}
            </li>
            <li className="list-group-item">
            <span className="text-danger">Address:</span> {address}
            </li>
            <li className="list-group-item">
            <span className="text-danger">Phone:</span> {phone}
            </li>
            <li className="list-group-item">
            <span className="text-danger">Creation Date:</span> {this.getTime(created_date)}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
User.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};



export default connect(
  null,
  { deleteUser: deleteUser }
)(User);