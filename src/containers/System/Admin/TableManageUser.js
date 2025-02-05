import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions";


class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []

        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    render() {
        console.log('check all users : ', this.props.listUsers)
        return (

            <table id="TableManageUser">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>


                    <tr>
                        <td>{'item.email'}</td>
                        <td>{'item.firstName'}</td>
                        <td>{'item.lastName'}</td>
                        <td>{'item.address'}</td>
                        <td>

                            <button className="btn-edit" ><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn-delete" ><i className="fas fa-trash"></i></button>

                        </td>

                    </tr>
                </tbody>

            </table>

        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
