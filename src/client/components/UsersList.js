import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user=> {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                Here is a big list of users!
                { this.renderUsers() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

function loadData(store) {
    //console.log('im tring to load some data');
    return store.dispatch(fetchUsers());
}

export { loadData };
export default connect(mapStateToProps, {fetchUsers})(UsersList);