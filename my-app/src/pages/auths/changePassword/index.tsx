import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import './changePassword.scss'

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string,
};


function ChangePassword() {
  const { register, handleSubmit, watch, formState: { errors },getValues  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(errors);
  const log = () => {
    console.log(errors.password?.type)

  }
  return (
    <>
      <div className="page-container">
        <div className="auth-container">
          <h1 className="auth-title">
            Change Password
          </h1>
          <p className="auth-subtitle">Create your new password</p>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input  {...register("email")} type="email" id="email" placeholder="Email" />
            <label htmlFor="oldPassword">Old Password</label>
            <input type="password" {...register("password" ,{ pattern: /^[0-9]+$/i })} id="oldPassword" placeholder="Old Password" />
            <label htmlFor="newPassword">New Password</label>
            <input {...register("confirmPassword", { required: true })} type="password" id="newPassword" placeholder="New Password" />
            <button type="submit" onClick={()=>log()} >Change Password</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword