import React , { Component, Fragment } from 'react';
import User from "./User";
import { connect } from "react-redux";
import { getUsers } from "../../actions/index";
import PropTypes from "prop-types";

class Users extends Component {

    componentDidMount() {
        this.props.getUsers();
      }

    render() {
        const { users } = this.props;
        if(!users){
            return (<h1> Loading...</h1>)
        }
        return (
          <Fragment>
            <h1 className="display-4 mb-2">
              <span className="text-danger">Users </span>
              List
            </h1>
            {users.map(user => (
              <User key={user._id} user={user} />
            ))}
          </Fragment>
        );
      }
    }
    
    Users.propTypes = {
      users: PropTypes.array.isRequired,
      getUsers: PropTypes.func.isRequired
    };
    const mapStateToProps = state => ({
      users: state.user.users
    });
    
    
    
    export default connect(
      mapStateToProps,
      { getUsers: getUsers }
    )(Users);

