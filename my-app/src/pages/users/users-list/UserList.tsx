import { CircularProgress, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Group, GroupSelect } from '../../../@core/apis/users/user-interface';
import { getUserList } from '../../../@core/apis/users/users';
import { Department, PassType, WorkingDay } from '../../../@core/share/enum';
import { USERTYPE, USERTYPE_DISPLAY, USER_TYPE_COLOR } from '../../../@core/shared/constants';
import Select, { components, GroupBase } from "react-select";
import './UserList.scss'
import { useForm } from 'react-hook-form';

interface FormData {
  filterForm: filterInfo
}

interface filterInfo {
  name?: string;
  userName?: string;
  userType?: string;
  passType?: string;
  department?: string;
  location?: string;
  supervisor?: string;
  email?: string;
  mobile?: string;
  workingDay?: string;
  active?: string;
}

function UserList() {
  const group: Group = useSelector((state: any) => state.user.group);
  const [page, setPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showFilter, setShowFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState<filterInfo>({} as filterInfo);
  const { control, register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(['repoData', group], () =>
    getUserList(group.id, { amount: 100 }),
    {
      enabled: !!group?.id,
      refetchOnWindowFocus: true,
      keepPreviousData: true
    }
  )

  const onSubmit = handleSubmit(data => setDataFilter(data.filterForm));

  const onRemoveFilter = (key: string) => {
    setDataFilter({ ...dataFilter, [key]: "" })
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

  const navigateUserCreate = () => {
    navigate('/users/create')
  }
  return <>
    <>
      <div className="user-header d-flex justify-content-between">
        <div className="title-container">
          <p className="user-title" >User Management</p>
          <button className="filter-button" onClick={() => setShowFilter(!showFilter)} type="button">
            <i className="icon-filter"></i> Filter
          </button>
        </div>
        <div className="user-action d-flex gap-1">
          <button className="button-yellow"><i className="icon-export"></i>Export data</button>
          <button className="button-blue"><i className="icon-import"></i>Import data</button>
          <button onClick={() => navigateUserCreate()} className="button-cyan"><i className="icon-plus"></i>Add new  user</button>
        </div>
      </div>
      <form className={`table-filter ${showFilter ? "show-filter" : ""}`} onSubmit={onSubmit}>
        <div className="table-filter-wrap">
          <i className="icon-cancel" onClick={() => setShowFilter(!showFilter)}></i>
          <h2>User filters</h2>
          <div className="table-filter-container">
            <div className="table-search-filter">
              <p className="filter-title">Name</p>
              <input type="text" placeholder="Name" {...register("filterForm.name")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">User Name</p>
              <input type="text" placeholder="User Name" {...register("filterForm.userName")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">User type</p>
              <input type="text" placeholder="User type" {...register("filterForm.userType")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">Pass type</p>
              <input type="text" placeholder="Pass type" {...register("filterForm.passType")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">Department</p>
              <input type="text" placeholder="Department" {...register("filterForm.department")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">Location</p>
              <input type="text" placeholder="Location" {...register("filterForm.location")} />
            </div >
            <div className="table-search-filter">
              <p className="filter-title">Supervisor</p>
              <input type="text" placeholder="Supervisor" {...register("filterForm.supervisor")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">Email</p>
              <input type="email" placeholder="Email" {...register("filterForm.email")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">Mobile No.</p>
              <input type="text" placeholder="Mobile No." {...register("filterForm.mobile")} />
            </div>
            <div className="table-search-filter">
              <p className="filter-title">Working days</p>
              <input type="text" placeholder="User Name" {...register("filterForm.workingDay")} />
            </div >
            <div className="table-search-filter">
              <p className="filter-title">Active</p>
              <input type="text" placeholder="User Name" {...register("filterForm.active")} />
            </div >
          </div >
          <div className="filter-action">
            <button type="button" onClick={() => setShowFilter(!showFilter)} className="button-white" >Cancel</button>
            <button type="submit" onClick={onSubmit} className="button-blue" > Apply</button >
          </div >
        </div >
      </form >
      {
        dataFilter && <div className="table-filter-tags">
          {
            Object.entries(dataFilter).map(([key, value]) => {
              return value ? <div className="filter-tag" key={key} >
                {key} is
                <span>
                  {value}
                </span>
                <button onClick={() => onRemoveFilter(key)}>
                  <i className="icon-cross"></i>
                </button>
              </div> : null
            })
          }
        </div >
      }
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
            {!isLoading ? data?.data.map((item, i) => (
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
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </div>
    </>
  </>;
}

export default UserList;
