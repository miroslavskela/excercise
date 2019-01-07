import React , { Component, Fragment } from 'react';
import User from "./User";
import Loader from '../partials/Loader'
import { connect } from "react-redux";
import { getUsers } from "../../actions/index";
import PropTypes from "prop-types";

class Users extends Component {

    componentDidMount() {
        this.props.getUsers()
        .catch(error => window.alert(error.message))
        console.log(this.props.users)
      }
      componentWillReceiveProps(nextProps){
        console.log(nextProps);
      }
      
      
      
      render() {
        const { users } = this.props;  
        if(!users){
            return (<Loader/>)
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

