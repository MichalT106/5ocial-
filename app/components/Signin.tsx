import React, { useState } from "react";
import InputBox from "./InputBox/InputBox";
import PrimaryButton from "./Buttons/PrimaryButton";
import Card from "./Card/Card";
import { BackgroundBeams } from "./ui/background-beams";

const Signin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <div>
      <div className="relative z-10">
        <Card>
          <p className="font-bold text-2xl ">Sign in to social</p>
          <label>
            Email
            <InputBox type="email" placeholder="name@email.com"></InputBox>
          </label>
          <label className="relative">
            Password
            <button
              className="absolute left-52 top-11 transform -translate-y-1/2 w-9 h-10 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-linecap="round">
                    <path
                      stroke-linejoin="round"
                      d="M10.73 5.073A11 11 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.6 11.6 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"
                    />
                    <path d="m4 4l16 16" />
                  </g>
                </svg>
              )}
            </button>
            <InputBox
              type={isPasswordVisible ? "text" : "password"}
              placeholder="••••••••"
            />
          </label>
          <div className="flex justify-between">
            <p className="text-xs">Forgot password?</p>
            <p className="text-xs">Sign Up</p>
          </div>
          <PrimaryButton>Login</PrimaryButton>
        </Card>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Signin;