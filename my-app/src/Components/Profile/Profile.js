import React from "react";
import basestyle from "../Base.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import './Profile.css'
import Search_icon_dark from '../../assets/search-b.png'
import gift_dark from '../../assets/gift.png'

const Profile = ({ setUserState, username }) => {

  const navigate = useNavigate();


  const handleLogin = (e) => {
    navigate("/home")
  };


  return (
    <div className="container">
      <div className='navbar_1'>

        <img src={gift_dark} alt="logo_light" className='logo'/>
        <h1 className='logo_text'><i>Sacred Vows</i></h1>
      </div>


      <h1 className="text">Welcome!!</h1>

      <div className="container_1">
        <h1>Enter your Details</h1>
      <form>
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
            placeholder="Enter your email"/>
            </td>
            </tr>

            <tr>
            <td>
          <label>Password </label>
            </td>
            <td>:</td>
            <td>
          <input type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"/>
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
            placeholder="Enter your number"/>
            </td>
            </tr>

            <tr>
            <td>
          <label>Profile Created For</label>
            </td>
            <td>:</td>
            <td>
              <select>
              <option>--select--</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Others</option>
              </select>
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
            placeholder="Enter your first name"/>
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
            placeholder="Enter your last name"/>
            </td>
            </tr>

            <tr>
            <td>
          <label>Gender </label>
            </td>
            <td>:</td>
            <td>
            <input type="radio" name="gender"/> Male &nbsp; &nbsp; <input type="radio" name="gender"/> Female
            </td>
            </tr>

            <tr>
            <td>
          <label>Living In</label>
            </td>
            <td>:</td>
            <td>
              <select>
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
            placeholder="Enter your address"/>
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
            id="date"/>
            </td>
            </tr>

            <tr>
            <td>
          <label>Marital Status</label>
            </td>
            <td>:</td>
            <td>
              <select>
                <option>--Select--</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </td>
            </tr> 

            <tr>
            <td>
          <label>Religion </label>
            </td>
            <td>:</td>
            <td>
              <select>
                <option>--Select Religion--</option>
                <option>Hindu</option>
                <option>Christian</option>
                <option>Muslim</option>
              </select>
            </td>
            </tr> 

            <tr>
            <td>
          <label>Mother Tongue</label>
            </td>
            <td>:</td>
            <td>
              <select>
                <option>--Select--</option>
                <option>Hindi</option>
                <option>Malayalam</option>
                <option>Tamil</option>
                <option>kannada</option>
              </select>
            </td>
            </tr> 

            <tr>
            <td>
          <label>Height</label>
            </td>
            <td>:</td>
            <td>
              <select>
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
            id="date"/>
            </td>
            </tr>

            <tr></tr>
            <tr></tr>
            <tr>
              <td></td>
              <td></td>
              <td><button>Submit</button> &nbsp; <button>Reset</button></td>
            </tr>

      </table>
      </form>

      </div>
    
    </div>
  );
};
export default Profile;
