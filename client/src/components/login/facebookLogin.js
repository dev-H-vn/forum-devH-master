import React from "react";
import { useDispatch } from "react-redux";
import { FacebookLogin } from "react-facebook-login-lite";
import { useHistory } from "react-router";
import { loginFacebook } from "../../redux/reducer/auth";

function FacebookButton() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSuccess = async (response) => {
    const { accessToken, userID } = response.authResponse;
    await dispatch(loginFacebook({ accessToken, userID }));
    history.push("/");
  };

  return (
    <div className="mt-2">
      <FacebookLogin
        appId="316030890663563"
        onSuccess={onSuccess}
        height="50px"
      ></FacebookLogin>
    </div>
  );
}

export default FacebookButton;
