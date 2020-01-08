import React, { useRef,setState } from "react";
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);
  const onSubmit = async data => {
    //this.setState({name:data.firstName});
    alert(data.firstName);
    
    alert(JSON.stringify(data));
  };
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="row">
    <div className="col-12">
    <label> First Name</label>
    <input type="text" className="form-field" placeholder="First name" name="firstName" ref={register({
                  required: true, 
                  maxLength: 80,
                  required: 'Required',
                  })} />
    {errors.firstName && <p>{ errors.firstName.message}</p>}
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <label> Last Name</label>
    <input type="text" className="form-field" placeholder="Last name" name="lastName" ref={register({required: true, maxLength: 100,
                                        required: 'Required',})} />
    {errors.lastName && <p>{ errors.lastName.message}</p>}
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <label> Address</label>
    <input type="text" className="form-field" placeholder="Address" name="address" ref={register({required: true, maxLength: 100,
                                        required: 'Required',})} />
    {errors.address && <p>{ errors.address.message}</p>}
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <label> Country</label>
    <select className="form-field" name="country" ref={register({ required: true,required: 'Required' })}>
     <option value="">Select</option>
      <option value="Germany">Germany</option>
      <option value="Austria"> Austria</option>
      <option value="Switzerland"> Switzerland</option>
    </select>
    {errors.country && <p>{ errors.country.message}</p>}
    </div>
    </div>
    <div className="row">
    <div className="col-12">
    <button type="submit">Submit</button>
    </div>
    </div>
  </form>
  );
}