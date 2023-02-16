import React from 'react'
import UserForm from '../../../components/userForm/UserForm'
import './UserCreate.scss'

function UserCreate() {
    return (
        <>
            <div className="page-header">
                <p>Create a new User</p>
                <div className="page-header-filter">
                    <button className="button-cyan"><i className="icon-plus"></i> Save changes</button>
                </div>
            </div>
            <UserForm></UserForm>
        </>
    )
}

export default UserCreate