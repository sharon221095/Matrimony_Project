import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { Controller, useForm } from 'react-hook-form';

const Login = ({ setUserState }) => {

  const { register, clearErrors, handleSubmit, setValue, control, watch, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();


  const handleLogin = (e) => {
    navigate("/profile")
  };



  return (
    <div className={loginstyle.container}>
      <div className={loginstyle.container1}>
        <div className={loginstyle.info}>
          <span> <i className='fa fa-phone'></i> +9791682689</span>
          <span> <i className='fa fa-envelope'></i> sacredvows@gmail.com</span>
        </div>
        <nav>
          <div className={loginstyle.menu}>
            <a href="#">Home</a>&nbsp;
            <a href="#">About Us</a>&nbsp;
            <a href="#">Services</a>&nbsp;
            <a href="#">Stats</a>&nbsp;
            <a href="#">Testimonials</a>&nbsp;
            <a href="#">Subscribe!!</a>
          </div>
          <div className={loginstyle.logo}>
            <i className='fa fa-gift'></i>&nbsp;<i><b>Sacred Vows</b></i>
          </div>
        </nav>
      </div>
      <div className={loginstyle.container2}>
        <div className={loginstyle.login}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1>Login</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              {...register('Email', {
                required: true,
              }
            )}

            />
            <p className={basestyle.error}>{!!errors.Email && "Email requried"}</p>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register('Password', {
                required: true,
              })}
              />
        
            <p className={basestyle.error}>{!!errors.Password && "Password requried"}</p>
            <button type="submit" className={basestyle.button_common}>
              Login
            </button>
          </form>

          <NavLink to="/signup"><a>Not yet registered? Register Now</a></NavLink>
        </div>
      </div>
      <div className={loginstyle.container3}>
        <h1>Matrimonial Search.</h1>
        <h2>Best Matching <span>Couples</span></h2>
        <p>
          Sacredvows.com, one of India's best known brands and the world's largest matrimonial service was founded with a simple objective - to help people find happiness. The company pioneered online matrimonials in 1996 and continues to lead the exciting matrimony category after more than a decade. By redefining the way Indian brides and grooms meet for marriage, Sacredvows.com has created a world-renowned service that has touched over 35 million people. <a href="#">Read more</a>
        </p>
      </div>
    </div>

  );
};
export default Login;
