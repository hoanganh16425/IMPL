import { useSelector } from "react-redux";
import { UserState } from "../../redux/userSlice";
import Select from "react-select";
import "./Header.scss";
import { useEffect, useState } from "react";
import { Group, GroupData } from "../../@core/apis/users/user-interface";
function Header() {
  const userData = useSelector((state: UserState) => state.userData);
  const [groupsData, setGroupsData] = useState<Group | any>();
  const [e, setE] = useState("");
  useEffect(() => {
    let temp = "";
    console.log(temp);
    // setGroupsData(temp);
  }, [userData]);

  const test = () => {
    console.log("dasd", userData);
    console.log("dasd", userData.userData.userInfo);
    console.log(Object.keys(userData)[0]);
  };

  return (
    <div className="main-header">
      <div className="company-select">
        <span className="company-select-title" onClick={test}>
          {e ? e : "asda"}
        </span>
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="color"
          options={groupsData}
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
          <p>hoanganh</p>
          {/* <div ngbDropdown display="dynamic">
                        <i className="icon-arrow-down icon-dropdown" id="settingPanelDropdown" ngbDropdownToggle></i>
                        <div className="setting-panel" ngbDropdownMenu aria-labelledby="settingPanelDropdown">
                            <div className="setting-panel-item" ngbDropdownItem>Edit Profile</div>
                            <div className="setting-panel-item" (click)="openChangePassword()" ngbDropdownItem>
                                Change Password
                            </div>
                            <div className="setting-panel-item" ngbDropdownItem>Setting</div>
                            <div className="line"></div>
                            <button className="setting-panel-item" ngbDropdownItem (click)="logout()">Log Out</button>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
