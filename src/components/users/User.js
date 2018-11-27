import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/index";

class User extends Component {
    constructor(props){
        super(props)
        this.state = {
          showUserInfo: false
        };
    }
  onShowClick = () => {
    this.setState({ showUserInfo: !this.state.showUserInfo });
  };
  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { name, surname, city, address, phone, _id } = this.props.user;
    const { showUserInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} {surname}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, _id)}
          />
          <a href={`contact/edit/${_id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </a>
        </h4>
        {showUserInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              City: {city}
            </li>
            <li className="list-group-item">
              Address: {address}
            </li>
            <li className="list-group-item">
              Phone: {phone}
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