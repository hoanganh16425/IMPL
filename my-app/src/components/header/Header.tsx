import "./Header.scss";
function Header() {
  return (
    <div className="main-header">
      <div className="company-select">
        <span className="company-select-title">Group</span>
        {/* <ng-select [items]="groupList" bindLabel="name" [(ngModel)]="groupSelected"
                    [searchable]="false" [clearable]="false" placeholder="Group" (change)="handleChangeGroup($event)">
                </ng-select> */}
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
