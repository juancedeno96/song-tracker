import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../redux/userReducer";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile_pic, setProfilePic] = useState("");
  const [registerView, setView] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    if (registerView === false) {
      setView(true);
    } else {
      setView(false);
    }
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", { email, password })
      .then((res) => {
        props.updateUser(res.data);
        console.log(res.data)
        props.history.push("/home");
      })
      .catch(() => alert('incorrect email or password'));
  };

  const register = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", {
        email,
        password,
        profile_pic,
      })
      .then((res) => {
        props.updateUser(res.data);
        props.history.push("/home");
        alert("registered!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='auth-main'>
      <section className='auth-container'>
        <h1>Welcome
           </h1>
        {registerView ? (
          <>
            <h3>Register Below</h3>
            
          
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              name="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Profile Picture url"
              name="profile_pic"
              value={profile_pic}
              onChange={(e) => setProfilePic(e.target.value)}
            />
            <button onClick={(e) => register(e)}>Register</button>
            <p>Have an account?</p>{" "}
            <span onClick={(e) => handleToggle(e)}>Login Here</span>
            
          </>
        ) : ( <>
          <h3>Login Below</h3>
          <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => login(e)}>Login</button>
        <p>Don't have an account?</p>{" "}
        <span onClick={(e) => handleToggle(e)}>Register Here</span>
          </>
        )}
       
       
        <br />
      </section>
    </div>
  );

 
};

const mapToStateProps = reduxState => reduxState

export default connect(mapToStateProps, updateUser)(Auth);
