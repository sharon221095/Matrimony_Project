import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { register, clearErrors, handleSubmit, setValue, control, watch, reset, formState: { errors } } = useForm();

  const handleLogin = (e) => {
    navigate("/")
  };

 
  return (
    <>
    <div className={registerstyle.container}>
    <div className={registerstyle.container1}>
        <div className={registerstyle.info}>
        <span> <i className='fa fa-phone'></i> +9791682689</span>
        <span> <i className='fa fa-envelope'></i> sacredvows@gmail.com</span>
        </div>
        <nav>
            <div className={registerstyle.menu}>
                <a href="#">Home</a>&nbsp;
                <a href="#">About Us</a>&nbsp;
                <a href="#">Services</a>&nbsp;
                <a href="#">Stats</a>&nbsp;
                <a href="#">Testimonials</a>&nbsp;
                <a href="#">Subscribe!!</a>
            </div>
            <div className={registerstyle.logo}>
                <i className='fa fa-gift'></i>&nbsp;<i><b>Sacred Vows</b></i>
            </div>
        </nav>
        </div>
        <div className={registerstyle.container2}>
      <div className={registerstyle.register}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Create your account</h1>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            {...register('firstName', {
              required: true,
            }
          )}
          />
          <p className={basestyle.error}>{!!errors.firstName && "First Name requried"}</p>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            {...register('lName', {
              required: true,
            }
          )}
          />
          <p className={basestyle.error}>{!!errors.lName && "Last Name required"}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            {...register('email', {
              required: true,
            }
          )}
          />
          <p className={basestyle.error}>{!!errors.email && "Email required"}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register('password', {
              required: true,
            }
          )}
          />
          <p className={basestyle.error}>{!!errors.password && "Password required"}</p>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            {...register('cpassword', {
              required: true,
            })}
          />
          <p className={basestyle.error}>{!!errors.cpassword && "Password required"}</p>
          <button className={basestyle.button_common}>
            Register
          </button>
        </form>

        <NavLink to="/">Already registered? Login</NavLink>
      </div>
      </div>
      <div className={registerstyle.container3}>
        <h1>Matrimonial Search.</h1>
        <h2>Best Matching <span>Couples</span></h2>
        <p>
        Sacredvows.com, one of India's best known brands and the world's largest matrimonial service was founded with a simple objective - to help people find happiness. The company pioneered online matrimonials in 1996 and continues to lead the exciting matrimony category after more than a decade. By redefining the way Indian brides and grooms meet for marriage, Sacredvows.com has created a world-renowned service that has touched over 35 million people. <a href="#">Read more</a>
        </p>
    </div>
      </div>
    </>
  );
};
export default Register;
