import React, { useRef,setState } from "react";
import { useForm } from 'react-hook-form';





export default function Settings() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
   
  password.current = watch("password", "");
  const onSubmit = async data => {
    alert(JSON.stringify(data));
    //setState(data:)
  };
  
        return(
          <form onSubmit={handleSubmit(onSubmit)}>
       <div className="row">
    <div className="col-12">
    <label> Email</label>
      <input
        className="form-field"
        name="email"
        placeholder="Email" 
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
     {errors.email && <p>{ errors.email.message}</p>}
   </div>
   </div>
   <div className="row">
    <div className="col-12">
    <label> Password</label>
    <input
        className="form-field"
        name="password"
        type="password"
        placeholder="Password" 
        ref={register({
          required: "You must specify a password",
           
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i,
            message: "Password must be Uppercase letters, lowercase letters, numbers and special characters"
          }
          // minLength: {
          //   value: 8,
          //   message: "Password must have at least 8 characters"
          // }
       
        })}
      />
      {/* {console.log(this.props)} */}
      {errors.password && <p>{errors.password.message}</p>}
   </div>
   </div>
   <div className="row">
    <div className="col-12">
    <label> Repeat Password</label>
    <input
        className="form-field"
        name="password_repeat"
        placeholder="Repeat Password" 
        type="password"
        ref={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
  
{errors.password_repeat && <p>{errors.password_repeat.message}</p>}
   </div>
   </div>
   <div className="row">
    <div className="col-12">
    <button type="submit">Submit</button>
      </div>
    </div>
    </form>
        )
      
    }


