import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../../actions/index";

import InputGroup from "../partials/InputGroup";


class AddUser extends Component {
  state = {
          name: "",
          surname:"",
          city: "",
          address:"",
          phone: "",
          errors: {},
          info:false
        };
    
  onSubmit = e => {
    e.preventDefault();
    const { name, surname, address, city, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (surname === "") {
      this.setState({ errors: { surname: "Surname is required" } });
      return;
    }
    if (city === "") {
        this.setState({ errors: { city: "City is required" } });
        return;
      }
      if (address === "") {
        this.setState({ errors: { address: "Address is required" } });
        return;
      }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }
    const newUser = {
      name,
      surname,
      address,
      city,
      phone,
    };

    this.props.addUser(newUser)
    .then(() => {
        this.setState({ name: "", surname: "",city:"", address:"", phone: "", errors: {}});
        this.props.history.push("/");
    })
    .catch((error) => {
        window.alert(error.message);
    })
    
  

  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name,surname, city, address, phone, errors } = this.state;

    return (

   
      <div className="card mb-3">
        <div className="card-header">Add User</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <InputGroup
              label="Name"
              name="name"
              placeholder="Enter Name....."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <InputGroup
              label="Surname"
              name="surname"
              placeholder="Enter Surname....."
              value={surname}
              onChange={this.onChange}
              error={errors.surname}
            />
              <InputGroup
               label="City"
               name="city"
               placeholder="Enter city....."
               value={city}
               onChange={this.onChange}
               error={errors.city}
             />
            <InputGroup
              label="Address"
              name="address"
              placeholder="Enter address....."
              value={address}
              onChange={this.onChange}
              error={errors.address}
            />
             <InputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone....."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add User"
              className="btn btn-danger btn-block"
            />
          </form>
        </div>
      </div>
      
    );
  }
}
AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addUser: addUser }
)(AddUser);