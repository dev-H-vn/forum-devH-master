import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/reducer/profile";

function ProfileCard() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { profile, auth } = useSelector((state) => state);

  useEffect(() => {
    console.log({ id: auth.user._id, idd: id });

    dispatch(getUser({ id }));
  }, [auth, id, dispatch]);
  return (
    <div className="card-container">
      <img className="round" src={profile.user.avatar} alt="user" />
      <h3>{profile.user.name}</h3>
      <p>{profile.user.bio}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ghost">Following</button>
        {auth.user._id === id && (
          <Link to="/editUser">
            <button className="warning">Edit Profile</button>
          </Link>
        )}
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {auth.user._id !== id
            ? profile.user.skill &&
              profile.user.skill.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))
            : auth.user.skill &&
              auth.user.skill.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
