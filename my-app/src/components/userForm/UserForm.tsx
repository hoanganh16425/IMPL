import React, { useState } from 'react'
import './UserForm.scss'
import Select from "react-select"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DEPARTMENT, USERTYPE, WORKINGDAY } from '../../@core/shared/constants'
import { TextField } from '@mui/material';
import moment, { Moment } from 'moment';
import { useSelector } from 'react-redux';
import { CreateUserRequest, UserData } from '../../@core/apis/users/user-interface';
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";

type FormData = {
    userForm: CreateUserRequest
};

function UserForm() {
    const [selectedDate, setSelectedDate] = useState(moment());
    const businessCompany: UserData = useSelector((state: any) => state.user.userData)
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const handleDateChange = (date: Moment | null) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <>
            <form className="form-container" onSubmit={onSubmit}>
                <div className="form-content">
                    {/* <!-- GENERAL block --> */}
                    <div className="form-block">
                        <p className="form-block-title">GENERAL INFO</p>
                        <div className="form-block-content" {...register("userForm.userGeneralInfo")}>
                            <div className="input-wrap error-invisible">
                                <label>Name<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text"  {...register("userForm.userGeneralInfo.name")} />
                                </div>
                            </div>
                            <div className="input-wrap error-invisible">
                                <label>Username<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" {...register("userForm.userGeneralInfo.userName")} />
                                </div>
                            </div>
                            <div className="select-wrap error-invisible">
                                <label>User Type<span className="text-danger">*</span></label>
                                {/* <Controller
                                    name="select"
                                    control={control}
                                    render={({ field: { onChange, value } }: ControllerRenderProps<FormValues, 'select'>) => (
                                        <Select
                                            className="basic-single select-css"
                                            classNamePrefix="select"
                                            placeholder=""
                                            options={USERTYPE}
                                            isMulti={true}
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                /> */}
                                <Select
                                    className="basic-single select-css"
                                    classNamePrefix="select"
                                    placeholder=""
                                    options={USERTYPE}
                                    isMulti={true}
                                />
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Password<span className="text-danger">*</span></label >
                                <div className="position-relative">
                                    <input type="text" />
                                    <i title="Generate Password" className="icon-lock"></i>
                                </div >
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Email</label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Mobile<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div >
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Date Joined<span className="text-danger">*</span></label>
                                <div>
                                    <DesktopDatePicker
                                        label=""
                                        inputFormat="MM/DD/YYYY"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Postal Code</label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Address 1<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Address 2</label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div >
                    </div >
                    {/* // < !--PARTICULARS block-- > */}
                    <div className="form-block" >
                        <p className="form-block-title">PARTICULARS</p>
                        <div className="form-block-content">
                            <div className="input-wrap error-invisible">
                                <label>NRIC / FIN<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="select-wrap error-invisible">
                                <label>Citizenship<span className="text-danger">*</span></label>
                                <Select
                                    className="basic-single select-css"
                                    classNamePrefix="select"
                                    placeholder=""
                                    options={USERTYPE}
                                    isMulti={true}
                                />
                            </div>
                            <div className="input-wrap error-invisible">
                                <label>DOB<span className="text-danger">*</span></label>
                                <div>
                                    <DesktopDatePicker
                                        label=""
                                        inputFormat="MM/DD/YYYY"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Age</label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="input-wrap error-invisible">
                                <label>Pass Type<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Work Pass Expiry</label>
                                <div className="position-relative">
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Emergency Contact<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Relationship<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="select-wrap error-invisible">
                                <label>Business company<span className="text-danger">*</span></label>
                                <Select
                                    className="basic-single select-css"
                                    classNamePrefix="select"
                                    placeholder=""
                                    options={businessCompany && businessCompany.companies.length > 0 ? businessCompany.companies.map((item) => {
                                        return {
                                            value: item.id,
                                            label: item.code,
                                            ...item
                                        }
                                    }) : undefined}
                                />
                            </div >
                            <div className="select-wrap error-invisible">
                                <label>Group<span className="text-danger">*</span></label>
                                <Select
                                    className="basic-single select-css"
                                    classNamePrefix="select"
                                    placeholder=""
                                    options={USERTYPE}
                                    isMulti={true}
                                />
                            </div >
                        </div >
                    </div >
                </div>
                {/* // < !--WORKING DETAILS BLOCK-- > */}
                <div className="form-block"  >
                    <p className="form-block-title">WORKING DETAILS</p>
                    <div className="form-block-content">
                        <div className="input-wrap error-invisible">
                            <label>Years of Service</label>
                            <div>
                                <input
                                    type="text" />
                            </div>
                        </div>
                        <div className="input-wrap error-invisible">
                            <label>Job Title<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />

                            </div>
                        </div>
                        <div className="select-wrap error-invisible">
                            <label>Department<span className="text-danger">*</span></label>
                            <Select
                                className="basic-single select-css"
                                classNamePrefix="select"
                                placeholder=""
                                options={DEPARTMENT}
                                isMulti={true}
                            />
                        </div >
                        <div className="select-wrap error-invisible">
                            <label>Location<span className="text-danger">*</span></label>
                            <Select
                                className="basic-single select-css"
                                classNamePrefix="select"
                                placeholder=""
                                options={USERTYPE}
                                isMulti={true}
                            />
                        </div >
                        <div className="select-wrap error-invisible">
                            <label>Supervisor<span className="text-danger">*</span></label>
                            <Select
                                className="basic-single select-css"
                                classNamePrefix="select"
                                placeholder=""
                                options={USERTYPE}
                                isMulti={true}
                            />
                        </div >
                        <div className="select-wrap error-invisible">
                            <label>Working Day<span className="text-danger">*</span></label>
                            <Select
                                className="basic-single select-css"
                                classNamePrefix="select"
                                placeholder=""
                                options={WORKINGDAY}
                                isMulti={true}
                            />
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Shift starts<span className="text-danger">*</span></label>
                            <div>
                                <input type="time" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Shift ends<span className="text-danger">*</span></label>
                            <div>
                                <input type="time" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible checkbox">
                            <p>Meal break</p>
                            <input type="checkbox" id="mealbreak" />
                            <label htmlFor="mealbreak"></label>
                        </div>
                        <div className="input-wrap error-invisible checkbox">
                            <p>WFH</p>
                            <input type="checkbox" id="wfh" />
                            <label htmlFor="wfh"></label>
                        </div>
                        <div className="input-wrap error-invisible checkbox">
                            <p>OT</p>
                            <input type="checkbox" id="ot" />
                            <label htmlFor="ot"></label>
                        </div>
                    </div >
                </div >
                {/* < !--CONTRACT BLOCK-- > */}
                <div className="form-block" >
                    <p className="form-block-title">CONTRACT</p>
                    <div className="form-block-content">
                        <div className="select-wrap error-invisible error-invisible">
                            <label>Employment Term<span className="text-danger">*</span></label>
                            <Select
                                className="basic-single select-css"
                                classNamePrefix="select"
                                placeholder=""
                                options={USERTYPE}
                                isMulti={true}
                            />
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Date left</label>
                            <div>
                                <DesktopDatePicker
                                    label=""
                                    inputFormat="MM/DD/YYYY"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible" >
                            <label>Bank Name</label>
                            <div>
                                <input type="text" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Account No.</label>
                            <div>
                                <input type="text" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Basic<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Allowance<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div >
                        </div >
                    </div >
                </div >
                {/* < !--PERMITS BLOCK-- > */}
                <div className="form-block" >
                    <p className="form-block-title">PERMITS</p>
                    <div className="form-block-content">
                        <div className="input-wrap error-invisible">
                            <label>JP Pass</label>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-wrap error-invisible">
                            <label>JP Pass Expiry</label>
                            <div>
                                <DesktopDatePicker
                                    label=""
                                    inputFormat="MM/DD/YYYY"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div>
                        <div className="input-wrap error-invisible">
                            <label>PSA Pass</label>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-wrap error-invisible">
                            <label>PSA Pass Expiry</label>
                            <div>
                                <DesktopDatePicker
                                    label=""
                                    inputFormat="MM/DD/YYYY"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Hazmat</label>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="input-wrap error-invisible">
                            <label>Hazmat Expiry</label>
                            <div>
                                <DesktopDatePicker
                                    label=""
                                    inputFormat="MM/DD/YYYY"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Driver License</label>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                    </div >
                </div >
                {/* < !--LEAVE BLOCK-- > */}
                <div className="form-block" >
                    <p className="form-block-title">LEAVE</p>
                    <div className="form-block-content">
                        <div className="input-wrap error-invisible">
                            <label>Annual Leave<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" step="0.5" className="text-center" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Medical Leave<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Urgent Leave<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible" >
                            <label>NS Reservist<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Compassionate<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Hospitalisation<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Marriage<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Maternity<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Paternity<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Unpaid<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Child care<span className="text-danger">*</span></label>
                            <div>
                                <input type="number" className="text-center" />
                            </div >
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Off-in-lieu</label>
                            <div>
                                <input type="number" className="text-center" />
                            </div>
                        </div>
                    </div >
                </div >
            </form >
        </>
    )
}

export default UserForm