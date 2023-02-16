import { useDispatch, useSelector } from "react-redux";
import { setGroup, UserState } from "../../redux/userSlice";
import Select from "react-select";
import "./Header.scss";
import { useEffect, useState } from "react";
import { Group, GroupData, GroupSelect, UserData } from "../../@core/apis/users/user-interface";
import { useNavigate } from "react-router-dom";
function Header() {
  const userData: UserData = useSelector((state: any) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [groupsData, setGroupsData] = useState<GroupSelect[] | any>();
  const defaultValue = {
    value: "b39f1638-0f6c-499a-9f8a-62354499a941",
    label: "IMPL",
    name: "Infiniti Marine Pte Ltd",
    address: "76 Playfair Rd, #03-05 LHK2 Building",
    country: "Singapore",
    logo: "http://api.implerp.airlab.dev/Resources/IMPL.png"
  }

  useEffect(() => {
    let temp: GroupSelect | any = [];
    if (userData) {
      temp = userData.groups.map((item) => {
        return {
          value: item.id,
          label: item.code,
          ...item,
        }
      })
      setGroupsData(temp);
    }
  }, [userData]);

  const logout = () => {
    localStorage.clear();
    navigate('/auth/login')
  }

  const handleChangGroup = (event: any) => {
    dispatch(setGroup(event))
  }

  return (
    <div className="main-header">
      <div className="company-select">
        <span className="company-select-title">
          GROUP
        </span>
        <Select
          className="basic-single select-group"
          classNamePrefix="select"
          name="color"
          options={groupsData}
          onChange={(event) => handleChangGroup(event)}
          defaultValue={defaultValue}
        />
      </div>
      <div className="header-content">
        <i className="icon-notify position-relative">
          <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
            2<span className="visually-hidden">unread messages</span>
          </span>
        </i>
        <div className="header-info">
          <div className="user-img">
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-1949247024-200-qakfjrmrzwlhrjkemezmqttkbzmkqngt.jpeg"
              alt=""
            />
            <span className="position-absolute bottom-0 start-100 translate-middle-x p-1 bg-primary border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </div>
          <p>{userData?.userInfo?.name}</p>
          <div className="dropdown">
            <i className="icon-arrow-down icon-dropdown" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><p className="dropdown-item">Edit Profile</p></li>
              <li><p className="dropdown-item">Change Password</p></li>
              <li><p className="dropdown-item">Setting</p></li>
              <li><p className="dropdown-item" onClick={() => logout()}>Log Out</p></li>
            </ul>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Header;
