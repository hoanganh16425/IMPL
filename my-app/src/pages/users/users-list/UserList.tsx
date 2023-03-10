import { CircularProgress, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Group, User } from '../../../@core/apis/users/user-interface';
import { getUserList } from '../../../@core/apis/users/users';
import { Department, PassType, WorkingDay } from '../../../@core/share/enum';
import { USERTYPE_DISPLAY, USER_TYPE_COLOR } from '../../../@core/shared/constants';
import './UserList.scss'

function UserList() {
  const group: Group = useSelector((state: any) => state.user.group);
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    if (group) {
      getAllUserList();
    }
  }, [group])

  const getAllUserList = async () => {
    setIsLoading(true);
    const userData = await getUserList(group.id, { amount: 100 });
    setUserList(userData.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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

  const navigateUserCreate=()=>{
    navigate('/users/create')
  }
  return <>
    <>
      <div className="user-header d-flex justify-content-between">
        <p className="user-title">User Management</p>
        <div className="user-action d-flex gap-1">
          <button className="button-yellow"><i className="icon-export"></i>Export data</button>
          <button className="button-blue"><i className="icon-import"></i>Import data</button>
          <button onClick={()=>navigateUserCreate()} className="button-cyan"><i className="icon-plus"></i>Add new  user</button>
        </div>
      </div>
      <div className="table-wrapper">
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
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
            {!isLoading ? userList.map((item, i) => (
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
            )) : <TableRow><TableCell colSpan={11} align="center"><CircularProgress color="success" /></TableCell></TableRow>}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  </>;
}

export default UserList;
