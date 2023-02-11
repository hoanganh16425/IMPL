import './UserList.scss'
function UserList() {
  return <>
    <div className="user-heder d-flex justify-content-between">
        <p className="user-title">User Management</p>
        <div className="user-action d-flex gap-1">
            <button className="button-yellow">Export data</button>
            <button className="button-blue">Import data</button>
            <button className="button-cyan">Add new  user</button>
        </div>
    </div>
  </>;
}

export default UserList;
