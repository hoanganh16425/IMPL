import React from 'react'
import './UserForm.scss'

function UserForm() {
    return (
        <>
            <div className="form-container">
                <div className="form-content">
                    {/* <!-- GENERAL block --> */}
                    <div className="form-block">
                        <p className="form-block-title">GENERAL INFO</p>
                        <div className="form-block-content">
                            <div className="input-wrap error-invisible">
                                <label>Name<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="input-wrap error-invisible">
                                <label>Username<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="input-wrap error-invisible">
                                <label>User Type<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
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
                                    <input type="text" />
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
                            <div className="input-wrap error-invisible">
                                <label>Citizenship<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="input-wrap error-invisible">
                                <label>DOB<span className="text-danger">*</span></label>
                                <div className="position-relative">
                                    <input />
                                </div >
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
                            <div className="input-wrap error-invisible">
                                <label>Business company<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
                            </div >
                            <div className="input-wrap error-invisible">
                                <label>Group<span className="text-danger">*</span></label>
                                <div>
                                    <input type="text" />
                                </div>
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
                        <div className="input-wrap error-invisible">
                            <label>Department<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Location<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Supervisor<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Working Day<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div>
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
                        <div className="input-wrap error-invisible error-invisible">
                            <label>Employment Term<span className="text-danger">*</span></label>
                            <div>
                                <input type="text" />
                            </div>
                        </div >
                        <div className="input-wrap error-invisible">
                            <label>Date left</label>
                            <div>
                                <input type="text" />
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
                                <input type="text" />
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
                                <input type="text" />
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
            </div >
        </>
    )
}

export default UserForm