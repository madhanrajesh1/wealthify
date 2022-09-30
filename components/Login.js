import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/Login";
import closeBtn from "../assets/image/closeBtn.svg";
const Login = () => {
  return (
    <Wrappers>
      <div className="container">
        <h1 className="name">Hi</h1>
        <div className="close-btn">
          <Image src={closeBtn} />
        </div>
        <div className="h3">Please enter your mobile number to login</div>
        <input className="number" type="text" />
        <Image />
        <p className="subtitle">
          OTP will be sent to this number by SMS And Whatsapp
        </p>
        {/* <div className="align-horizontal"> */}
        <input type="checkbox" name="" id="" />
        <p>By signing up, I agree to the</p>
        {/* </div> */}

        <h4>Privacy Policy, Terms and conditions of Dr. Wealthify</h4>
      </div>
    </Wrappers>
  );
};

export default Login;
