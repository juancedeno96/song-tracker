import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/userReducer";

const Landing = (props) => {
  console.log(props.user);

  return (
    <div>
      Landing Page
      <p>{props.user.user_id}</p>
      <p>{props.user.email}</p>
      <img src={props.user.profile_pic} alt="user profile pic"/>
    </div>
  );
};

const mapToStateProps = (reduxState) => ({
  user: reduxState,
});

export default connect(mapToStateProps, { updateUser })(Landing);
