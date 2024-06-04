import React from "react";
import basestyle from "../Base.module.css";
import { useNavigate } from "react-router-dom";
import './Profile.css'
import gift_dark from '../../assets/gift.png'
import { Controller, useForm } from 'react-hook-form';

const Profile = () => {

  const navigate = useNavigate();

  const { register, clearErrors, handleSubmit, setValue, control, watch, reset, formState: { errors } } = useForm();

  const handleLogin = (e) => {
    navigate("/home")
  };

  const handleReset = (e) => {
    reset();
    clearErrors();
  }


  return (
    <div className="container">
      <div className='navbar_1'>

        <img src={gift_dark} alt="logo_light" className='logo'/>
        <h1 className='logo_text'><i>Sacred Vows</i></h1>
      </div>


      <h1 className="text">Welcome!!</h1>

      <div className="container_1">
        <h1>Enter your Details</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <table>
          <tr>
            <td>
          <label>E-mail ID </label>
            </td>
            <td>:</td>
            <td>
          <input type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.email && "*Email required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Contact Mobile No</label>
            </td>
            <td>:</td>
            <td>
          <input type="number"
            name="number"
            id="number"
            placeholder="Enter your number"
            {...register('number', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.number && "*Number required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>First Name</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="fname"
            id="fname"
            placeholder="Enter your first name"
            {...register('fname', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.fname && "*First name required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Last Name</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="lname"
            id="lname"
            placeholder="Enter your last name"
            {...register('lname', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.lname && "*Last name required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Gender </label>
            </td>
            <td>:</td>
            <td>
              <select id="gender"  {...register('gender', {
              required: true,
            }
          )}
          >
                <option>--select--</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <p className={basestyle.error}>{!!errors.gender && "*Gender required"}</p>
            </td>
            </tr>


            <tr>  
            <td>
          <label>Living In</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('living_in', {
              required: true,
            }
          )}
          >
                <option>--select--</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Andhra Pradesh</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
              </select>
              <p className={basestyle.error}>{!!errors.living_in && "*required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Address</label>
            </td>
            <td>:</td>
            <td>
            <input type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            {...register('address', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.address && "*Address required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Date Of Birth</label>
            </td>
            <td>:</td>
            <td>
            <input type="date"
            name="date"
            id="date"
            {...register('date', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.date && "*required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Marital Status</label>
            </td>
            <td>:</td>
            <td>
              <select    {...register('marital_status', {
              required: true,
            }
          )}
          >
                <option>--Select--</option>
                <option>Single</option>
                <option>Married</option>
              </select>
              <p className={basestyle.error}>{!!errors.marital_status && "*required"}</p>
            </td>
            </tr> 

            <tr>
            <td>
          <label>Religion </label>
            </td>
            <td>:</td>
            <td>
              <select {...register('religion', {
              required: true,
            }
          )}
          >
                <option>--Select Religion--</option>
                <option>Hindu</option>
                <option>Christian</option>
                <option>Muslim</option>
              </select>
              <p className={basestyle.error}>{!!errors.religion && "*required"}</p>
            </td>
            </tr> 

            <tr>
            <td>
          <label>Mother Tongue</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('mother_tongue', {
              required: true,
            }
          )}
          >
                <option>--Select--</option>
                <option>Hindi</option>
                <option>Malayalam</option>
                <option>Tamil</option>
                <option>kannada</option>
              </select>
              <p className={basestyle.error}>{!!errors.mother_tongue && "*required"}</p>
            </td>
            </tr> 

            <tr>
            <td>
          <label>Height</label>
            </td>
            <td>:</td>
            <td>
              <select {...register('height', {
              required: true,
            }
          )}
          >
                <option>--Select--</option>
                <option>150-155 cm</option>
                <option>156-160 cm</option>
                <option>161-165 cm</option>
                <option>166-170 cm</option>
                <option>171-175 cm</option>
                <option>175-180 cm</option>
                <option>181-185 cm</option>
                <option>186-190 cm</option>
              </select>
              <p className={basestyle.error}>{!!errors.height && "*required"}</p>
            </td>
            </tr>

            <tr>
            <td>
          <label>Add Photo</label>
            </td>
            <td>:</td>
            <td>
            <input type="file"
            name="date"
            id="date"
            {...register('add_photo', {
              required: true,
            }
          )}
            />
            <p className={basestyle.error}>{!!errors.add_photo && "*required"}</p>
            </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>
                <button type="submit">Submit</button>
                <br/><br/>
                <button type="submit" onClick={()=>handleReset()}>Reset</button>
              </td>
            </tr>

        </table>
      </form>

      </div>
    
    </div>
  );
};
export default Profile;
