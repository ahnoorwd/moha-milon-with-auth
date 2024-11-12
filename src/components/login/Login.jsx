import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";

const Login = () => {
  const navigate = useNavigate();
  const { userSignin,signwithgoogle} = useContext(AuthContext);
  const loginHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userSignin(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  const handlewithgooglesignin = () =>{
    signwithgoogle()
    .then(result=>{
      console.log(result.user);
      navigate('/');

    })
    .catch(error=>{
      console.log('ERROR',error.message);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={loginHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center font-bold mb-4">
            if you new please{" "}
            <Link to="/register">
              <span className="text-green-400 underline">register</span>
            </Link>
          </p>
          <div className="flex justify-center items-center mb-4">
            <div className="btn w-[100px] text-center flex justify-center items-center">
              <button  onClick={handlewithgooglesignin}>Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
