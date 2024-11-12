import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/Authprovider";

const Register = () => {
  const navigate = useNavigate()
    const {usercreator} = useContext(AuthContext)
    const RegisterHandle = e =>{
    e.preventDefault();
     const name = e.target.name.value;
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(name,email,password);
     usercreator(email,password)
     .then(result=>{
      console.log(result)
      e.target.reset();
      navigate('/login');
     })
     .catch(error=>{console.log("ERROR",error.message)})
    }
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Registration Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={RegisterHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User-name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center font-bold mb-4">
           
           if you have an account <Link to='/login'><span className="text-green-500 underline">Login</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
