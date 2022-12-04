import React from 'react'
import UserSidenav from './UserSidenav';

import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './Userperforma.css'
import './Output.css'
import { CCard } from '@coreui/react';


import './User.scss'



const Userperforma = () => {
  const navigate = useHistory();
  const [form, setForm] = useState({
      name: "",
      age: 30,
      skills: [],
      where: "",
      time: "Diurno",
      payment: "nap",
      msg: "",
  })

  const [skill, setSkill] = useState("");

  function handleChange(event) {
      setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
      event.preventDefault();
      try {
          let res = await axios.get("https://ironrest.cyclic.app/hero-news");
          let arr = res.data;
          for (let i = 0; i < arr.length; i++) {
              const element = arr[i];
              if (element.name === form.name) {
                  console.log('repetido');
                  return
              }
          }
          await axios.post("https://ironrest.cyclic.app/hero-news", form);
          setForm({
              name: "",
              age: 30,
              skills: [],
              where: "",
              time: "",
              payment: "nap",
              msg: "",
          })
          navigate("/");
      } catch (err) {
          console.log(err);
      }
  }

  function handleSkillInput() {
      if (form.skills.includes(skill) || skill === '') {
          return { ...form }
      }
      return { ...form, skills: [...form.skills, skill] };
  }

  return (
    <div>
    <UserSidenav/>
    <div className="wrapper d-flex flex-column min-vh-100 ">
   
      <div style={{marginTop:"-111cm"}}  className="body flex-grow-1 px-3">
      
     <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Skill-Set Analysis</h2>
    </div>
    <div className="row clearfix">
      <div className>
        <form>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
            <input type="password" name="password" placeholder="Re-type Password" required />
          </div>
          <div className="row clearfix">
            <div className="col_half">
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                <input type="text" name="name" placeholder="First Name" />
              </div>
            </div>
            <div className="col_half">
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                <input type="text" name="name" placeholder="Last Name" required />
              </div>
            </div>
          </div>
          <div className="input_field radio_option">
            <input type="radio" name="radiogroup1" id="rd1" />
            <label style={{color:"black"}}  htmlFor="rd1">Male</label>
            <input type="radio" name="radiogroup1" id="rd2" />
            <label style={{color:"black"}} htmlFor="rd2">Female</label>
          </div>
          <div className="input_field select_option">
            <select>
              <option>Hiring Chalanges</option>
              <option> Competetive Programming</option>
              <option>Interview Problem</option>
              <option>Data Structures</option>
              <option>Algorithm</option>
              <option>Core CS</option>
              <option>Logical Thinking</option>
              <option>Development</option>
            </select>
            <div className="select_arrow" />
          </div>
          <div className="input_field select_option">
         
            <select>  
            <option>rating less than 900</option>
              <option>rating greater than 1000</option>
              <option>rating greater than 1200</option>
              <option>rating greater than 1500</option>
              <option>rating greater 2000</option>
            </select>
            <div className="select_arrow" />
          </div>
          <div className="input_field select_option">
                <label style={{color:"black", fontSize:".6cm"}} htmlFor="inputSkills" >
                    Skills{" "}
                </label>
                <input
                    id="inputSkills"
                    type="text"
                    name="skills"
                    value={skill}
                    className="bg-gray-300 border indent-1 border-black rounded"
                    
                    onKeyDown={(event) => event.key === 'Enter' ?
                        (
                            setForm(handleSkillInput()),
                            setSkill('')
                        )
                        : null
                    }
                    onChange={(event) => {
                        setSkill(event.target.value);
                    }}
                /><br/><br/>
                <button
                    type="button"
                    className="rounded leading-6 p-1 mx-1 text-xl transition ease-in-out delay-50 hover:scale-110 hover:bg-red-500 duration-50"
                    onClick={() => {
                        setForm(handleSkillInput());
                        setSkill('');
                    }}
                >
                    (+)
                </button>
                <br />
                {form.skills.map((currentSkill) => (
                    <div key={`${form.name}-${currentSkill}`}>
                        <strong className="p-1 m-1 bg-blue-500 rounded">{currentSkill}</strong>
                        <button
                            type="button"
                            className="bg-red-500 h-6 mb-1 align-top leading-3 rounded p-1 mx-1 transition ease-in-out delay-50 hover:scale-150 hover:bg-red-500 duration-50"
                            onClick={() => {
                                setForm({ ...form, skills: form.skills.filter(element => element !== currentSkill) });
                            }}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
          <div className="input_field select_option">
            <select>
              
              <option>Codeforces</option>
              <option>Codechef</option>
              <option>Leetcode</option>
              <option>Hackerrank</option>
              <option>Hackerearth</option>
              <option>Cses</option>
              <option>Atcoder</option>
            </select>
            <div className="select_arrow" />
          </div>

          <div className="input_field checkbox_option">
            <input type="checkbox" id="cb1" />
            <label style={{color:"black"}} htmlFor="cb1">I agree with terms and conditions</label>
          </div>
          <div className="input_field checkbox_option">
            <input type="checkbox" id="cb2" />
            <label style={{color:"black"}} htmlFor="cb2">I want to receive the Notification</label>
          </div>
         <Link to="/analyse"><input className="button" type="submit" defaultValue="Analyse" /></Link> 
        </form>
      </div>
    </div>
  </div>
</div>

        
      </div>
    </div>
  </div>
  )
}

export default Userperforma