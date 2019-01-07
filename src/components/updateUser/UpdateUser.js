import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions/index";
import InputGroup from "../partials/InputGroup";


class UpdateUser extends Component {
    state = {
        name: "",
        surname:"",
        city: "",
        address:"",
        phone: "",
        errors: {}
      };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id)
    .catch(error => window.alert(error.message))
    console.log(this.props.user)
  }

  componentWillReceiveProps(nextProps, nextState) {  
    const { name,surname, city, address, phone } = nextProps.user;
    this.setState({ name, surname, city, address, phone });
    console.log(nextProps.user)
  }

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
    const { id } = this.props.match.params;
    const updatedUser = {
        name,
        surname,
        address,
        city,
        phone
    };
    this.props.updateUser(id, updatedUser)
    .then(() => { 
        this.setState({ name: "", surname: "",city:"", address:"", phone: "", errors: {} });
        this.props.history.push("/");
     })
     .catch(error => window.alert(error.message))

  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name,surname, city, address, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Update User</div>
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
              value="Update User"
              className="btn btn-danger btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

UpdateUser.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(UpdateUser);
