import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Group, User } from '../../../@core/apis/users/user-interface';
import { getUserList } from '../../../@core/apis/users/users';
import { Department, PassType, WorkingDay } from '../../../@core/share/enum';
import { USERTYPE_DISPLAY, USER_TYPE_COLOR } from '../../../@core/shared/constants';
import './UserList.scss'

function UserList() {
  const group: Group = useSelector((state: any) => state.user.group);
  const [userList, setUserList] = useState<User[]>([])
  useEffect(() => {
    if (group) {
      getAllUserList();
    }
  }, [group])

  const getAllUserList = async () => {
    const userData = await getUserList(group.id, { amount: 100 })
    setUserList(userData.data)
  }

  const enumToText = (value: number, enumSource: any) => {
    return enumSource[value];
  }

  const workingDayTransform = (value?: number[]) => {
    const isValueSequential = isSequential(value);
    if (isValueSequential && value && value.length > 1) {
      const firstDay = value[0];
      const lastDay = value[value.length - 1];
      return `${WorkingDay[firstDay]} - ${WorkingDay[lastDay]}`;
    }
    return value?.map(item => WorkingDay[item]).join(" - ");
  }

  const isSequential = (array?: number[]): boolean => {
    const sortedArray = array?.slice().sort();
    return sortedArray?.length
      ? sortedArray?.every((current: number, i: number, arr: number[]): boolean => i > 0 ? current - arr[i - 1] === 1 : true)
      : false;
  }

  return <>
    <>
      <div className="user-header d-flex justify-content-between">
        <p className="user-title">User Management</p>
        <div className="user-action d-flex gap-1">
          <button className="button-yellow">Export data</button>
          <button className="button-blue">Import data</button>
          <button className="button-cyan">Add new  user</button>
        </div>
      </div>
      <div className="table-wrapper">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="left">USER ID</TableCell>
              <TableCell align="left">USER TYPE</TableCell>
              <TableCell align="left">DEPARTMENT</TableCell>
              <TableCell align="left">LOCATION</TableCell>
              <TableCell align="left">SUPERVISOR</TableCell>
              <TableCell align="left">EMAIL</TableCell>
              <TableCell align="left">MOBILE NO.</TableCell>
              <TableCell align="left">PASS TYPE</TableCell>
              <TableCell align="left">WORKING DAYS</TableCell>
              <TableCell align="left">SHIFT STARTS</TableCell>
              <TableCell align="left">SHIFT ENDS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((item, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.fullName}
                </TableCell>
                <TableCell align="left"><span>{item.userName}</span></TableCell>
                <TableCell align="left"><span>{item.roles?.map((val, i) => <span className={`badge-${USER_TYPE_COLOR[val] || 'grey'}`} key={i}>{enumToText(val, USERTYPE_DISPLAY)}</span>)}</span></TableCell>
                <TableCell align="left"><span>{enumToText(item.department, Department)}</span></TableCell>
                <TableCell align="left"><span>{item.location?.join(",")}</span></TableCell>
                <TableCell align="left"><span>{item.supervisor || "-"}</span></TableCell>
                <TableCell align="left"><span className='email-cell'>{item.email || "-"}</span></TableCell>
                <TableCell align="left"><span>{item.mobileNo}</span></TableCell>
                <TableCell align="left"><span>{enumToText(item.workPass, PassType)}</span></TableCell>
                <TableCell align="left"><span>{workingDayTransform(item.workingDay)}</span></TableCell>
                <TableCell align="left"><span>{item.shiftStarts}</span></TableCell>
                <TableCell align="left"><span>{item.shiftEnds}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  </>;
}

export default UserList;
